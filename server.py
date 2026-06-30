from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json
import secrets
import sqlite3
import sys
import urllib.request
from datetime import datetime


ROOT = Path(__file__).resolve().parent
PUBLIC = ROOT / "public"
DATA = ROOT / "data"
DB_PATH = DATA / "erp.sqlite3"
SESSIONS = {}


DEFAULT_PRODUCTS = [
    {"name": "RACE AIRE - 40mm", "sku": "RAIRE40", "category": "轮组", "unit": "pcs", "price": 850, "cost": 0, "threshold": 5, "description": ""},
    {"name": "RACE ASTRAL - 59mm", "sku": "RAST59", "category": "轮组", "unit": "pcs", "price": 850, "cost": 0, "threshold": 5, "description": ""},
    {"name": "RACE ASTRAL 59 / FYRA 78", "sku": "RASTFYR", "category": "轮组", "unit": "pcs", "price": 850, "cost": 0, "threshold": 5, "description": ""},
    {"name": "RACE FYRA - 78mm", "sku": "RFYRA78", "category": "轮组", "unit": "pcs", "price": 850, "cost": 0, "threshold": 5, "description": ""},
    {"name": "RACE FYRA 78 / VELLAR DISC", "sku": "RFYRVEL", "category": "轮组", "unit": "pcs", "price": 850, "cost": 0, "threshold": 5, "description": ""},
    {"name": "RACE INFERA - Tri-Spoke", "sku": "RINFTRI", "category": "轮组", "unit": "pcs", "price": 920, "cost": 0, "threshold": 5, "description": ""},
    {"name": "RACE INFERA TRI / VELLAR DISC", "sku": "RINFVEL", "category": "轮组", "unit": "pcs", "price": 920, "cost": 0, "threshold": 5, "description": ""},
    {"name": "RACE LUMINA - 52mm", "sku": "RLUM52", "category": "轮组", "unit": "pcs", "price": 850, "cost": 0, "threshold": 5, "description": ""},
    {"name": "RACE RAVEX MTB 24", "sku": "RRAVMTB24", "category": "轮组", "unit": "pcs", "price": 780, "cost": 0, "threshold": 5, "description": ""},
    {"name": "RACE SYNERA - 47mm", "sku": "RSYN47", "category": "轮组", "unit": "pcs", "price": 850, "cost": 0, "threshold": 5, "description": ""},
    {"name": "RACE VELLAR - Full Disc", "sku": "RVELDISC", "category": "轮组", "unit": "pcs", "price": 990, "cost": 0, "threshold": 5, "description": ""},
]

DEFAULT_TRANSACTIONS = [
    {"date": "2026/06/17", "type": "入库", "item": "RACE AIRE - 40mm - Shimano FH / 彩虹", "quantity": 1, "warehouse": "HQ", "batch": "-"},
    {"date": "2026/06/17", "type": "入库", "item": "RACE ASTRAL - 59mm - Shimano FH / 彩虹", "quantity": 1, "warehouse": "HQ", "batch": "-"},
    {"date": "2026/06/17", "type": "入库", "item": "RACE FYRA - 78mm - Shimano FH / 彩虹", "quantity": 1, "warehouse": "HQ", "batch": "-"},
]

DEFAULT_SUPPLIERS = [
    {
        "name": "Xiamen Topcarbon Industrial Technology Co., Ltd",
        "contact": "Mia Chen",
        "email": "sales@topcarbon.example",
        "phone": "+86 592 555 0123",
        "currency": "CNY",
        "payment_terms": "30 天账期",
        "status": "启用",
        "address": "厦门市集美区",
        "tax_id": "",
        "bank": "",
        "notes": "",
    },
    {
        "name": "Raceone Components Taiwan",
        "contact": "Aaron Lin",
        "email": "supply@raceone-tw.example",
        "phone": "+886 2 5550 0218",
        "currency": "USD",
        "payment_terms": "15 天账期",
        "status": "启用",
        "address": "",
        "tax_id": "",
        "bank": "",
        "notes": "",
    },
]

DEFAULT_CUSTOMERS = [
    {"name": "Demo Customer", "contact": "Alex", "email": "customer@example.com", "phone": "", "currency": "USD", "address": "Customer address", "status": "启用", "notes": ""}
]

DEFAULT_SALES_INVOICES = []
DEFAULT_DELIVERY_ORDERS = []
DEFAULT_QUOTATIONS = []

DEFAULT_PURCHASE_INVOICES = [
    {
        "no": "PINV-260618-0004",
        "ref": "TC-W-MY2226C106",
        "date": "2026-06-18",
        "status": "草稿",
        "supplier": "Xiamen Topcarbon Industrial Technology Co., Ltd",
        "currency": "CNY",
        "exchangeRate": 1,
        "notes": "",
        "items": [{"description": "RACE AIRE - 40mm · White / Shimano FH", "sku": "RAIRE40-WHT-SH", "quantity": 1, "unitCost": 3375}],
    },
    {
        "no": "PINV-260618-0003",
        "ref": "TC-W-MY2226C104",
        "date": "2026-06-16",
        "status": "草稿",
        "supplier": "Xiamen Topcarbon Industrial Technology Co., Ltd",
        "currency": "CNY",
        "exchangeRate": 1,
        "notes": "",
        "items": [
            {"description": "RACE LUMINA - 52mm · White / Shimano FH", "sku": "RLUM52-WHT-SH", "quantity": 4, "unitCost": 2875},
            {"description": "RACE LUMINA - 52mm · Rainbow / Shimano FH", "sku": "RLUM52-RBW-SH", "quantity": 2, "unitCost": 2875},
            {"description": "RACE ASTRAL - 59mm · Gold / Shimano FH", "sku": "RAST59-GLD-SH", "quantity": 1, "unitCost": 2375},
            {"description": "RACE ASTRAL - 59mm · Rainbow / Shimano FH", "sku": "RAST59-RBW-SH", "quantity": 2, "unitCost": 2375},
            {"description": "RACE FYRA - 78mm · Black / SRAM XDR", "sku": "RFYRA78-BLK-SX", "quantity": 1, "unitCost": 2575},
            {"description": "RACE FYRA - 78mm · White / Shimano FH", "sku": "RFYRA78-WHT-SH", "quantity": 1, "unitCost": 2575},
            {"description": "INTERNATIONAL SHIPPING COST TO ITALY", "sku": "", "quantity": 1, "unitCost": 2300},
        ],
    },
    {
        "no": "PINV-260618-0002",
        "ref": "TC-W-MY2226C103",
        "date": "2026-06-16",
        "status": "草稿",
        "supplier": "Xiamen Topcarbon Industrial Technology Co., Ltd",
        "currency": "CNY",
        "exchangeRate": 1,
        "notes": "",
        "items": [{"description": "RACE FYRA - 78mm · Black / SRAM XDR", "sku": "RFYRA78-BLK-SX", "quantity": 1, "unitCost": 2405}],
    },
    {
        "no": "PINV-260618-0001",
        "ref": "TC-W-MY2226099",
        "date": "2026-06-16",
        "status": "草稿",
        "supplier": "Xiamen Topcarbon Industrial Technology Co., Ltd",
        "currency": "CNY",
        "exchangeRate": 1,
        "notes": "",
        "items": [{"description": "RACE ASTRAL - 59mm · Rainbow / Shimano FH", "sku": "RAST59-RBW-SH", "quantity": 1, "unitCost": 2555}],
    },
]

DEFAULT_CAPITAL_ENTRIES = [
    {"date": "2026-06-18", "type": "注入", "currency": "CNY", "amount": 20000, "exchangeRate": 1, "method": "银行", "description": "创始资金注入"},
    {"date": "2026-06-18", "type": "注入", "currency": "CNY", "amount": 40000, "exchangeRate": 1, "method": "银行", "description": "运营资金"},
    {"date": "2026-06-18", "type": "注入", "currency": "CNY", "amount": 20000, "exchangeRate": 1, "method": "现金", "description": "备用金"},
    {"date": "2026-06-18", "type": "注入", "currency": "USD", "amount": 10000, "exchangeRate": 1, "method": "在线转账", "description": "Shawn - 隋玉静投资款"},
]

DEFAULT_EXPENSE_ENTRIES = [
    {"date": "2026-02-05", "category": "杂项", "currency": "CNY", "amount": 38.23, "exchangeRate": 1, "method": "在线转账", "linked": "", "description": "网站服务费"},
    {"date": "2025-12-30", "category": "杂项", "currency": "CNY", "amount": 4040, "exchangeRate": 1, "method": "在线转账", "linked": "", "description": "轮组配件采购与物流"},
    {"date": "2025-12-12", "category": "杂项", "currency": "CNY", "amount": 313.6, "exchangeRate": 1, "method": "在线转账", "linked": "", "description": "FBA 相关费用"},
    {"date": "2025-12-12", "category": "杂项", "currency": "CNY", "amount": 240.77, "exchangeRate": 1, "method": "在线转账", "linked": "", "description": "FBA 相关费用"},
    {"date": "2025-11-30", "category": "杂项", "currency": "CNY", "amount": 8300, "exchangeRate": 1, "method": "在线转账", "linked": "", "description": "RACEONE 纸箱定金 50% - 康小平"},
    {"date": "2025-11-25", "category": "杂项", "currency": "CNY", "amount": 1365, "exchangeRate": 1, "method": "在线转账", "linked": "", "description": "REGISTER UCI - LUMINA 52"},
    {"date": "2025-08-19", "category": "杂项", "currency": "CNY", "amount": 9500, "exchangeRate": 1, "method": "在线转账", "linked": "", "description": "RACE ONE 商标注册 TRADEMARK REGISTER - EU"},
    {"date": "2025-08-09", "category": "杂项", "currency": "CNY", "amount": 4809.38, "exchangeRate": 1, "method": "在线转账", "linked": "", "description": "Hong Kong Zhuo xin - Open Company SSM register"},
    {"date": "2025-08-09", "category": "杂项", "currency": "CNY", "amount": 5500, "exchangeRate": 1, "method": "在线转账", "linked": "", "description": "广州联雅网络 - Website platform template"},
    {"date": "2025-08-08", "category": "杂项", "currency": "CNY", "amount": 82.74, "exchangeRate": 1, "method": "在线转账", "linked": "", "description": "WEBSITE DOMAIN"},
]

DEFAULT_CURRENCIES = [
    {"code": "CNY", "name": "Chinese Yuan", "symbol": "CNY", "rate": 1, "base": True, "active": True, "updated": "2026-06-18 11:40"},
    {"code": "AUD", "name": "Australian Dollar", "symbol": "A$", "rate": 4.7, "base": False, "active": True, "updated": "2026-06-18 11:40"},
    {"code": "EUR", "name": "Euro", "symbol": "EUR", "rate": 7.72, "base": False, "active": True, "updated": "2026-06-18 11:40"},
    {"code": "GBP", "name": "British Pound", "symbol": "GBP", "rate": 9.05, "base": False, "active": True, "updated": "2026-06-18 11:40"},
    {"code": "JPY", "name": "Japanese Yen", "symbol": "JPY", "rate": 0.047, "base": False, "active": True, "updated": "2026-06-18 11:40"},
    {"code": "MYR", "name": "Malaysian Ringgit", "symbol": "RM", "rate": 1.52, "base": False, "active": True, "updated": "2026-06-18 11:40"},
    {"code": "SGD", "name": "Singapore Dollar", "symbol": "S$", "rate": 5.3, "base": False, "active": True, "updated": "2026-06-18 11:40"},
    {"code": "USD", "name": "US Dollar", "symbol": "$", "rate": 7.15, "base": False, "active": True, "updated": "2026-06-18 11:40"},
]

DEFAULT_ROLES = [
    {"name": "Admin", "description": "系统管理员，可管理所有模块和权限。", "permissions": ["dashboard", "sales", "purchasing", "catalog", "finance", "admin"]},
    {"name": "Sales", "description": "销售团队，可访问客户、报价、销售与发货流程。", "permissions": ["dashboard", "sales", "catalog"]},
    {"name": "Warehouse", "description": "仓库团队，可管理库存、收货、出库和序列号。", "permissions": ["dashboard", "purchasing", "catalog"]},
    {"name": "Finance", "description": "财务团队，可管理资金、费用、利润表和汇率。", "permissions": ["dashboard", "finance", "purchasing"]},
]

DEFAULT_USERS = [
    {"username": "raceone", "name": "Race One Admin", "role": "Admin", "status": "启用", "created": "2026-06-16", "password": "123456"},
    {"username": "Chris", "name": "Chris", "role": "Warehouse", "status": "启用", "created": "2026-06-16", "password": "123456"},
]

DEFAULT_SYSTEM_SETTINGS = {
    "companyName": "Raceone",
    "legalName": "Raceone Wheels",
    "defaultCurrency": "CNY",
    "timezone": "Asia/Shanghai",
    "dateFormat": "YYYY/MM/DD",
    "defaultWarehouse": "HQ",
    "lowStockThreshold": 5,
    "requireStrongPassword": True,
    "allowAutoRateUpdate": True,
}


def connect():
    DATA.mkdir(exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with connect() as conn:
        conn.executescript(
            """
            create table if not exists products (
                id integer primary key autoincrement,
                name text not null,
                sku text not null unique,
                category text not null,
                unit text not null default 'pcs',
                price real not null default 0,
                cost real not null default 0,
                threshold integer not null default 5,
                description text not null default '',
                attributes text not null default '[]',
                variants text not null default '[]',
                created_at text not null default current_timestamp
            );
            create table if not exists stock_transactions (
                id integer primary key autoincrement,
                date text not null,
                type text not null,
                item text not null,
                quantity integer not null,
                warehouse text not null,
                batch text not null default '-',
                created_at text not null default current_timestamp
            );
            create table if not exists serials (
                id integer primary key autoincrement,
                serial_no text not null unique,
                model text not null,
                color text not null,
                arrival text not null,
                status text not null,
                qr text not null default 'QR',
                created_at text not null default current_timestamp
            );
            create table if not exists settings (
                key text primary key,
                value text not null
            );
            create table if not exists suppliers (
                id integer primary key autoincrement,
                name text not null,
                contact text not null default '',
                email text not null default '',
                phone text not null default '',
                currency text not null default 'CNY',
                payment_terms text not null default '',
                status text not null default '启用',
                address text not null default '',
                tax_id text not null default '',
                bank text not null default '',
                notes text not null default '',
                created_at text not null default current_timestamp
            );
            create table if not exists customers (
                id integer primary key autoincrement,
                customer_json text not null,
                created_at text not null default current_timestamp
            );
            create table if not exists sales_invoices (
                id integer primary key autoincrement,
                invoice_json text not null,
                created_at text not null default current_timestamp
            );
            create table if not exists quotations (
                id integer primary key autoincrement,
                quote_json text not null,
                created_at text not null default current_timestamp
            );
            create table if not exists delivery_orders (
                id integer primary key autoincrement,
                order_json text not null,
                created_at text not null default current_timestamp
            );
            create table if not exists purchase_invoices (
                id integer primary key autoincrement,
                invoice_json text not null,
                created_at text not null default current_timestamp
            );
            create table if not exists goods_receipts (
                id integer primary key autoincrement,
                receipt_json text not null,
                created_at text not null default current_timestamp
            );
            create table if not exists capital_entries (
                id integer primary key autoincrement,
                entry_json text not null,
                created_at text not null default current_timestamp
            );
            create table if not exists expense_entries (
                id integer primary key autoincrement,
                entry_json text not null,
                created_at text not null default current_timestamp
            );
            create table if not exists currencies (
                id integer primary key autoincrement,
                currency_json text not null,
                created_at text not null default current_timestamp
            );
            create table if not exists users (
                id integer primary key autoincrement,
                user_json text not null,
                created_at text not null default current_timestamp
            );
            create table if not exists roles (
                id integer primary key autoincrement,
                role_json text not null,
                created_at text not null default current_timestamp
            );
            create table if not exists system_settings (
                id integer primary key check (id = 1),
                settings_json text not null
            );
            """
        )
        columns = [row["name"] for row in conn.execute("pragma table_info(products)")]
        if "attributes" not in columns:
            conn.execute("alter table products add column attributes text not null default '[]'")
        if "variants" not in columns:
            conn.execute("alter table products add column variants text not null default '[]'")
        product_count = conn.execute("select count(*) from products").fetchone()[0]
        if product_count == 0:
            conn.executemany(
                """
                insert into products (name, sku, category, unit, price, cost, threshold, description)
                values (:name, :sku, :category, :unit, :price, :cost, :threshold, :description)
                """,
                DEFAULT_PRODUCTS,
            )
        transaction_count = conn.execute("select count(*) from stock_transactions").fetchone()[0]
        if transaction_count == 0:
            conn.executemany(
                """
                insert into stock_transactions (date, type, item, quantity, warehouse, batch)
                values (:date, :type, :item, :quantity, :warehouse, :batch)
                """,
                DEFAULT_TRANSACTIONS,
            )
        supplier_count = conn.execute("select count(*) from suppliers").fetchone()[0]
        if supplier_count == 0:
            conn.executemany(
                """
                insert into suppliers (name, contact, email, phone, currency, payment_terms, status, address, tax_id, bank, notes)
                values (:name, :contact, :email, :phone, :currency, :payment_terms, :status, :address, :tax_id, :bank, :notes)
                """,
                DEFAULT_SUPPLIERS,
            )
        customer_count = conn.execute("select count(*) from customers").fetchone()[0]
        if customer_count == 0:
            conn.executemany(
                "insert into customers (customer_json) values (?)",
                [(json.dumps(customer, ensure_ascii=False),) for customer in DEFAULT_CUSTOMERS],
            )
        sales_invoice_count = conn.execute("select count(*) from sales_invoices").fetchone()[0]
        if sales_invoice_count == 0 and DEFAULT_SALES_INVOICES:
            conn.executemany(
                "insert into sales_invoices (invoice_json) values (?)",
                [(json.dumps(invoice, ensure_ascii=False),) for invoice in DEFAULT_SALES_INVOICES],
            )
        quotation_count = conn.execute("select count(*) from quotations").fetchone()[0]
        if quotation_count == 0 and DEFAULT_QUOTATIONS:
            conn.executemany(
                "insert into quotations (quote_json) values (?)",
                [(json.dumps(quote, ensure_ascii=False),) for quote in DEFAULT_QUOTATIONS],
            )
        delivery_order_count = conn.execute("select count(*) from delivery_orders").fetchone()[0]
        if delivery_order_count == 0 and DEFAULT_DELIVERY_ORDERS:
            conn.executemany(
                "insert into delivery_orders (order_json) values (?)",
                [(json.dumps(order, ensure_ascii=False),) for order in DEFAULT_DELIVERY_ORDERS],
            )
        purchase_invoice_count = conn.execute("select count(*) from purchase_invoices").fetchone()[0]
        if purchase_invoice_count == 0:
            conn.executemany(
                "insert into purchase_invoices (invoice_json) values (?)",
                [(json.dumps(invoice, ensure_ascii=False),) for invoice in DEFAULT_PURCHASE_INVOICES],
            )
        capital_count = conn.execute("select count(*) from capital_entries").fetchone()[0]
        if capital_count == 0:
            conn.executemany(
                "insert into capital_entries (entry_json) values (?)",
                [(json.dumps(entry, ensure_ascii=False),) for entry in DEFAULT_CAPITAL_ENTRIES],
            )
        expense_count = conn.execute("select count(*) from expense_entries").fetchone()[0]
        if expense_count == 0:
            conn.executemany(
                "insert into expense_entries (entry_json) values (?)",
                [(json.dumps(entry, ensure_ascii=False),) for entry in DEFAULT_EXPENSE_ENTRIES],
            )
        currency_count = conn.execute("select count(*) from currencies").fetchone()[0]
        if currency_count == 0:
            conn.executemany(
                "insert into currencies (currency_json) values (?)",
                [(json.dumps(currency, ensure_ascii=False),) for currency in DEFAULT_CURRENCIES],
            )
        user_count = conn.execute("select count(*) from users").fetchone()[0]
        if user_count == 0:
            conn.executemany(
                "insert into users (user_json) values (?)",
                [(json.dumps(user, ensure_ascii=False),) for user in DEFAULT_USERS],
            )
        role_count = conn.execute("select count(*) from roles").fetchone()[0]
        if role_count == 0:
            conn.executemany(
                "insert into roles (role_json) values (?)",
                [(json.dumps(role, ensure_ascii=False),) for role in DEFAULT_ROLES],
            )
        conn.execute(
            "insert or ignore into system_settings (id, settings_json) values (1, ?)",
            (json.dumps(DEFAULT_SYSTEM_SETTINGS, ensure_ascii=False),),
        )
        conn.execute("insert or ignore into settings (key, value) values ('selectedProduct', '0')")


def fetch_state():
    with connect() as conn:
        products = []
        for row in conn.execute("select name, sku, category, unit, price, cost, threshold, description, attributes, variants from products order by id asc"):
            product = dict(row)
            product["attributes"] = json.loads(product.pop("attributes") or "[]")
            product["variants"] = json.loads(product.pop("variants") or "[]")
            products.append(product)
        transactions = [
            [row["date"], row["type"], row["item"], str(row["quantity"]), row["warehouse"], row["batch"]]
            for row in conn.execute("select date, type, item, quantity, warehouse, batch from stock_transactions order by id asc")
        ]
        serials = [
            [row["serial_no"], row["model"], row["color"], row["arrival"], row["status"], row["qr"]]
            for row in conn.execute("select serial_no, model, color, arrival, status, qr from serials order by id asc")
        ]
        suppliers = [
            {
                "name": row["name"],
                "contact": row["contact"],
                "email": row["email"],
                "phone": row["phone"],
                "currency": row["currency"],
                "paymentTerms": row["payment_terms"],
                "status": row["status"],
                "address": row["address"],
                "taxId": row["tax_id"],
                "bank": row["bank"],
                "notes": row["notes"],
            }
            for row in conn.execute("select name, contact, email, phone, currency, payment_terms, status, address, tax_id, bank, notes from suppliers order by id asc")
        ]
        customers = [
            json.loads(row["customer_json"] or "{}")
            for row in conn.execute("select customer_json from customers order by id asc")
        ]
        sales_invoices = [
            json.loads(row["invoice_json"] or "{}")
            for row in conn.execute("select invoice_json from sales_invoices order by id asc")
        ]
        quotations = [
            json.loads(row["quote_json"] or "{}")
            for row in conn.execute("select quote_json from quotations order by id asc")
        ]
        delivery_orders = [
            json.loads(row["order_json"] or "{}")
            for row in conn.execute("select order_json from delivery_orders order by id asc")
        ]
        purchase_invoices = [
            json.loads(row["invoice_json"] or "{}")
            for row in conn.execute("select invoice_json from purchase_invoices order by id asc")
        ]
        goods_receipts = [
            json.loads(row["receipt_json"] or "{}")
            for row in conn.execute("select receipt_json from goods_receipts order by id asc")
        ]
        capital_entries = [
            json.loads(row["entry_json"] or "{}")
            for row in conn.execute("select entry_json from capital_entries order by id asc")
        ]
        expense_entries = [
            json.loads(row["entry_json"] or "{}")
            for row in conn.execute("select entry_json from expense_entries order by id asc")
        ]
        currencies = [
            json.loads(row["currency_json"] or "{}")
            for row in conn.execute("select currency_json from currencies order by id asc")
        ]
        users = [
            json.loads(row["user_json"] or "{}")
            for row in conn.execute("select user_json from users order by id asc")
        ]
        roles = [
            json.loads(row["role_json"] or "{}")
            for row in conn.execute("select role_json from roles order by id asc")
        ]
        settings_row = conn.execute("select settings_json from system_settings where id = 1").fetchone()
        selected = conn.execute("select value from settings where key = 'selectedProduct'").fetchone()
    return {
        "products": products,
        "transactions": transactions,
        "serials": serials,
        "suppliers": suppliers,
        "customers": customers,
        "quotations": quotations,
        "salesInvoices": sales_invoices,
        "deliveryOrders": delivery_orders,
        "purchaseInvoices": purchase_invoices,
        "goodsReceipts": goods_receipts,
        "capitalEntries": capital_entries,
        "expenseEntries": expense_entries,
        "currencies": currencies,
        "users": users,
        "roles": roles,
        "systemSettings": json.loads(settings_row["settings_json"]) if settings_row else DEFAULT_SYSTEM_SETTINGS,
        "selectedProduct": int(selected["value"]) if selected else 0,
    }


def save_state(payload):
    products = payload.get("products", [])
    transactions = payload.get("transactions", [])
    serials = payload.get("serials", [])
    suppliers = payload.get("suppliers", [])
    customers = payload.get("customers", [])
    quotations = payload.get("quotations", [])
    sales_invoices = payload.get("salesInvoices", [])
    delivery_orders = payload.get("deliveryOrders", [])
    purchase_invoices = payload.get("purchaseInvoices", [])
    goods_receipts = payload.get("goodsReceipts", [])
    capital_entries = payload.get("capitalEntries", [])
    expense_entries = payload.get("expenseEntries", [])
    currencies = payload.get("currencies", [])
    users = payload.get("users", [])
    roles = payload.get("roles", [])
    system_settings = payload.get("systemSettings", DEFAULT_SYSTEM_SETTINGS)
    selected_product = int(payload.get("selectedProduct", 0) or 0)
    with connect() as conn:
        conn.execute("delete from products")
        conn.execute("delete from stock_transactions")
        conn.execute("delete from serials")
        conn.execute("delete from suppliers")
        conn.execute("delete from customers")
        conn.execute("delete from quotations")
        conn.execute("delete from sales_invoices")
        conn.execute("delete from delivery_orders")
        conn.execute("delete from purchase_invoices")
        conn.execute("delete from goods_receipts")
        conn.execute("delete from capital_entries")
        conn.execute("delete from expense_entries")
        conn.execute("delete from currencies")
        conn.execute("delete from users")
        conn.execute("delete from roles")
        for product in products:
            conn.execute(
                """
                insert into products (name, sku, category, unit, price, cost, threshold, description, attributes, variants)
                values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    product.get("name", ""),
                    product.get("sku", ""),
                    product.get("category", "轮组"),
                    product.get("unit", "pcs"),
                    float(product.get("price", 0) or 0),
                    float(product.get("cost", 0) or 0),
                    int(product.get("threshold", 5) or 5),
                    product.get("description", ""),
                    json.dumps(product.get("attributes", []), ensure_ascii=False),
                    json.dumps(product.get("variants", []), ensure_ascii=False),
                ),
            )
        for row in transactions:
            conn.execute(
                """
                insert into stock_transactions (date, type, item, quantity, warehouse, batch)
                values (?, ?, ?, ?, ?, ?)
                """,
                (row[0], row[1], row[2], int(row[3] or 0), row[4], row[5] if len(row) > 5 else "-"),
            )
        for row in serials:
            conn.execute(
                """
                insert into serials (serial_no, model, color, arrival, status, qr)
                values (?, ?, ?, ?, ?, ?)
                """,
                (row[0], row[1], row[2], row[3], row[4], row[5] if len(row) > 5 else "QR"),
            )
        for supplier in suppliers:
            conn.execute(
                """
                insert into suppliers (name, contact, email, phone, currency, payment_terms, status, address, tax_id, bank, notes)
                values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    supplier.get("name", ""),
                    supplier.get("contact", ""),
                    supplier.get("email", ""),
                    supplier.get("phone", ""),
                    supplier.get("currency", "CNY"),
                    supplier.get("paymentTerms", ""),
                    supplier.get("status", "启用"),
                    supplier.get("address", ""),
                    supplier.get("taxId", ""),
                    supplier.get("bank", ""),
                    supplier.get("notes", ""),
                ),
            )
        for customer in customers:
            conn.execute(
                "insert into customers (customer_json) values (?)",
                (json.dumps(customer, ensure_ascii=False),),
            )
        for quote in quotations:
            conn.execute(
                "insert into quotations (quote_json) values (?)",
                (json.dumps(quote, ensure_ascii=False),),
            )
        for invoice in sales_invoices:
            conn.execute(
                "insert into sales_invoices (invoice_json) values (?)",
                (json.dumps(invoice, ensure_ascii=False),),
            )
        for order in delivery_orders:
            conn.execute(
                "insert into delivery_orders (order_json) values (?)",
                (json.dumps(order, ensure_ascii=False),),
            )
        for invoice in purchase_invoices:
            conn.execute(
                "insert into purchase_invoices (invoice_json) values (?)",
                (json.dumps(invoice, ensure_ascii=False),),
            )
        for receipt in goods_receipts:
            conn.execute(
                "insert into goods_receipts (receipt_json) values (?)",
                (json.dumps(receipt, ensure_ascii=False),),
            )
        for entry in capital_entries:
            conn.execute(
                "insert into capital_entries (entry_json) values (?)",
                (json.dumps(entry, ensure_ascii=False),),
            )
        for entry in expense_entries:
            conn.execute(
                "insert into expense_entries (entry_json) values (?)",
                (json.dumps(entry, ensure_ascii=False),),
            )
        for currency in currencies:
            conn.execute(
                "insert into currencies (currency_json) values (?)",
                (json.dumps(currency, ensure_ascii=False),),
            )
        for user in users:
            conn.execute(
                "insert into users (user_json) values (?)",
                (json.dumps(user, ensure_ascii=False),),
            )
        for role in roles:
            conn.execute(
                "insert into roles (role_json) values (?)",
                (json.dumps(role, ensure_ascii=False),),
            )
        conn.execute(
            "insert into system_settings (id, settings_json) values (1, ?) on conflict(id) do update set settings_json = excluded.settings_json",
            (json.dumps(system_settings, ensure_ascii=False),),
        )
        conn.execute(
            "insert into settings (key, value) values ('selectedProduct', ?) on conflict(key) do update set value = excluded.value",
            (str(selected_product),),
        )


def normalized_user(user):
    next_user = dict(user or {})
    next_user["username"] = next_user.get("username", "")
    next_user["name"] = next_user.get("name") or next_user["username"]
    next_user["role"] = next_user.get("role") or "Sales"
    next_user["status"] = next_user.get("status") or "启用"
    next_user["created"] = next_user.get("created") or "2026-06-21"
    next_user["password"] = next_user.get("password") or "123456"
    return next_user


def load_users():
    with connect() as conn:
        rows = conn.execute("select id, user_json from users order by id asc").fetchall()
    return [(row["id"], normalized_user(json.loads(row["user_json"] or "{}"))) for row in rows]


def login_user(username, password):
    for _, user in load_users():
        if user.get("username") != username:
            continue
        if user.get("status") in ("禁用", "绂佺敤"):
            return None
        if str(user.get("password") or "123456") != str(password or ""):
            return None
        safe_user = dict(user)
        safe_user.pop("password", None)
        return safe_user
    return None


def create_session(username):
    token = secrets.token_urlsafe(32)
    SESSIONS[token] = username
    return token


def authenticated_user(token):
    username = SESSIONS.get(token or "")
    if not username:
        return None
    for _, user in load_users():
        if user.get("username") == username and user.get("status") not in ("绂佺敤", "禁用"):
            safe_user = dict(user)
            safe_user.pop("password", None)
            return safe_user
    SESSIONS.pop(token, None)
    return None


def change_user_password(username, current_password, new_password):
    if not new_password:
        return False, "new password required"
    for row_id, user in load_users():
        if user.get("username") != username:
            continue
        if str(user.get("password") or "123456") != str(current_password or ""):
            return False, "current password incorrect"
        user["password"] = str(new_password)
        with connect() as conn:
            conn.execute(
                "update users set user_json = ? where id = ?",
                (json.dumps(user, ensure_ascii=False), row_id),
            )
        return True, ""
    return False, "user not found"


def update_currency_rates(currencies):
    url = "https://open.er-api.com/v6/latest/CNY"
    with urllib.request.urlopen(url, timeout=8) as response:
        payload = json.loads(response.read().decode("utf-8"))
    rates = payload.get("rates", {})
    if not rates:
        raise RuntimeError("汇率源没有返回可用数据")
    updated = datetime.now().strftime("%Y-%m-%d %H:%M")
    next_currencies = []
    for currency in currencies:
        code = str(currency.get("code", "")).upper()
        next_currency = dict(currency)
        if code == "CNY" or currency.get("base"):
          next_currency["rate"] = 1
          next_currency["base"] = code == "CNY" or bool(currency.get("base"))
        elif code in rates and rates[code]:
          next_currency["rate"] = round(1 / float(rates[code]), 6)
        next_currency["updated"] = updated
        next_currencies.append(next_currency)
    with connect() as conn:
        conn.execute("delete from currencies")
        for currency in next_currencies:
            conn.execute(
                "insert into currencies (currency_json) values (?)",
                (json.dumps(currency, ensure_ascii=False),),
            )
    return next_currencies, updated


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(PUBLIC), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def read_json(self):
        length = int(self.headers.get("Content-Length", "0"))
        return json.loads(self.rfile.read(length).decode("utf-8") or "{}")

    def session_token(self):
        header = self.headers.get("Authorization", "")
        if header.lower().startswith("bearer "):
            return header.split(" ", 1)[1].strip()
        return self.headers.get("X-Session-Token", "").strip()

    def require_user(self):
        user = authenticated_user(self.session_token())
        if not user:
            self.send_json({"ok": False, "error": "unauthorized"}, status=401)
            return None
        return user

    def do_GET(self):
        if self.path == "/api/state":
            if not self.require_user():
                return
            self.send_json(fetch_state())
            return
        super().do_GET()

    def do_POST(self):
        if self.path == "/api/login":
            payload = self.read_json()
            user = login_user(payload.get("username", ""), payload.get("password", ""))
            if not user:
                self.send_json({"ok": False, "error": "invalid credentials"}, status=401)
                return
            self.send_json({"ok": True, "user": user, "token": create_session(user.get("username", ""))})
            return
        if self.path == "/api/password":
            user = self.require_user()
            if not user:
                return
            payload = self.read_json()
            username = payload.get("username", "")
            if username != user.get("username"):
                self.send_json({"ok": False, "error": "forbidden"}, status=403)
                return
            ok, error = change_user_password(
                username,
                payload.get("currentPassword", ""),
                payload.get("newPassword", ""),
            )
            if not ok:
                self.send_json({"ok": False, "error": error}, status=400)
                return
            self.send_json({"ok": True})
            return
        if self.path == "/api/currencies/update":
            if not self.require_user():
                return
            payload = self.read_json()
            try:
                currencies, updated = update_currency_rates(payload.get("currencies", []))
            except Exception as exc:
                self.send_json({"ok": False, "error": str(exc)}, status=502)
                return
            self.send_json({"ok": True, "currencies": currencies, "updated": updated})
            return
        if self.path != "/api/state":
            self.send_error(404)
            return
        if not self.require_user():
            return
        payload = self.read_json()
        save_state(payload)
        self.send_json({"ok": True})

    def send_json(self, payload, status=200):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    init_db()
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4174
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Raceone ERP running at http://localhost:{port}/")
    server.serve_forever()
