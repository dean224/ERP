const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  receipt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 1 .7V2z"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m21 16-9 5-9-5V8l9-5 9 5z"/><path d="m3.3 7.5 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 7H5a3 3 0 0 1 0-6h13v4"/><path d="M3 5v14a3 3 0 0 0 3 3h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"/><path d="M16 14h2"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2"/><rect x="2" y="2" width="13" height="13" rx="2"/></svg>',
  open: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>',
  magic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m15 4 5 5-9 9H6v-5z"/><path d="M18 7 8 17"/><path d="M5 3v4M3 5h4M19 17v4M17 19h4"/></svg>',
  save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/></svg>'
  ,
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m12 11 9-9"/><path d="m17 6 2 2"/><path d="m14 9 2 2"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 0 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 0 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/></svg>'
};

const nav = [
  { title: '', items: [{ label: '仪表盘', icon: 'grid', page: 'dashboard' }] },
  { title: '销售', items: [
    { label: '销售发票', icon: 'file', page: 'sales-invoices' },
    { label: '发货单', icon: 'send', page: 'delivery-orders' },
    { label: '报价单', icon: 'receipt', page: 'quotations' },
    { label: '客户', icon: 'users', page: 'customers' }
  ] },
  { title: '采购', items: [
    { label: '采购发票', icon: 'receipt', page: 'purchase-invoices' },
    { label: '收货单', icon: 'box', page: 'goods-receipts' },
    { label: '采购订单', icon: 'file', page: 'purchase-orders' },
    { label: '供应商', icon: 'receipt', page: 'suppliers' }
  ] },
  { title: '产品与库存', items: [
    { label: '产品', icon: 'box', page: 'products' },
    { label: '库存', icon: 'grid', page: 'inventory' },
    { label: '序列号 / QR', icon: 'receipt', page: 'serial-qr' }
  ] },
  { title: '财务', items: [
    { label: '资金', icon: 'wallet', page: 'capital' },
    { label: '费用', icon: 'wallet', page: 'expenses' },
    { label: '利润表', icon: 'file', page: 'profit-loss' },
    { label: '货币汇率', icon: 'wallet', page: 'currencies' }
  ] },
  { title: 'ADMIN', items: [
    { label: '用户', icon: 'users', page: 'users' },
    { label: '系统设置', icon: 'gear', page: 'settings' }
  ] }
];

const defaultProducts = [
  { name: 'RACE AIRE - 40mm', sku: 'RAIRE40', category: '轮组', price: 850, cost: 0 },
  { name: 'RACE ASTRAL - 59mm', sku: 'RAST59', category: '轮组', price: 850, cost: 0 },
  { name: 'RACE ASTRAL 59 / FYRA 78', sku: 'RASTFYR', category: '轮组', price: 850, cost: 0 },
  { name: 'RACE FYRA - 78mm', sku: 'RFYRA78', category: '轮组', price: 850, cost: 0 },
  { name: 'RACE FYRA 78 / VELLAR DISC', sku: 'RFYRVEL', category: '轮组', price: 850, cost: 0 },
  { name: 'RACE INFERA - Tri-Spoke', sku: 'RINFTRI', category: '轮组', price: 920, cost: 0 },
  { name: 'RACE INFERA TRI / VELLAR DISC', sku: 'RINFVEL', category: '轮组', price: 920, cost: 0 },
  { name: 'RACE LUMINA - 52mm', sku: 'RLUM52', category: '轮组', price: 850, cost: 0 },
  { name: 'RACE RAVEX MTB 24', sku: 'RRAVMTB24', category: '轮组', price: 780, cost: 0 },
  { name: 'RACE SYNERA - 47mm', sku: 'RSYN47', category: '轮组', price: 850, cost: 0 },
  { name: 'RACE VELLAR - Full Disc', sku: 'RVELDISC', category: '轮组', price: 990, cost: 0 }
];

const attributes = [
  { name: '颜色', values: ['白色', '黑色', '彩虹', '金色'] },
  { name: '塔基', values: ['Shimano FH', 'SRAM XDR', 'Campagnolo'] }
];

const purchasingPages = {
  'purchase-invoices': {
    title: '采购发票',
    subtitle: '主要采购单据 - 支持多币种 - 可编辑 A4 单据并生成收货单',
    primary: '新建发票',
    search: '搜索发票 / 供应商',
    filter: '全部状态',
    columns: ['发票号', '参考号', '日期', '供应商', '币种', '总额', '本位币 (CNY)', '状态', '操作'],
    rows: [
      ['PINV-260618-0004', 'TC-W-MY2226C106', '2026/06/18', 'Xiamen Topcarbon Industrial Technology Co., Ltd', 'CNY', 'CNY 3,375.00', 'CNY 3,375.00', '草稿'],
      ['PINV-260618-0003', 'TC-W-MY2226C104', '2026/06/16', 'Xiamen Topcarbon Industrial Technology Co., Ltd', 'CNY', 'CNY 28,750.00', 'CNY 28,750.00', '草稿'],
      ['PINV-260618-0002', 'TC-W-MY2226C103', '2026/06/16', 'Xiamen Topcarbon Industrial Technology Co., Ltd', 'CNY', 'CNY 2,405.00', 'CNY 2,405.00', '草稿'],
      ['PINV-260618-0001', 'TC-W-MY2226099', '2026/06/16', 'Xiamen Topcarbon Industrial Technology Co., Ltd', 'CNY', 'CNY 2,555.00', 'CNY 2,555.00', '草稿']
    ]
  },
  'goods-receipts': {
    title: '收货单',
    subtitle: '采购商品入库 - 关联序列号与质检结果',
    primary: '新建收货单',
    search: '搜索收货单 / 供应商',
    filter: '全部收货单',
    columns: ['收货单号', '采购发票', '日期', '供应商', '仓库', '数量', '状态', '操作'],
    rows: [
      ['GR-260618-0004', 'PINV-260618-0004', '2026/06/18', 'Xiamen Topcarbon Industrial Technology Co., Ltd', '主仓', '25', '待处理'],
      ['GR-260618-0003', 'PINV-260618-0003', '2026/06/16', 'Xiamen Topcarbon Industrial Technology Co., Ltd', '主仓', '140', '已收货']
    ]
  },
  'purchase-orders': {
    title: '采购订单',
    subtitle: '供应商承诺 - 预计交期 - 已确认订单可转采购发票',
    primary: '新建订单',
    search: '搜索订单 / 供应商',
    filter: '全部状态',
    columns: ['PO 号', '供应商参考', '下单日期', '供应商', '预计到货', '总额', '状态', '操作'],
    rows: [
      ['PO-260618-0003', 'TC-W-MY2226C106', '2026/06/18', 'Xiamen Topcarbon Industrial Technology Co., Ltd', '2026/06/26', 'CNY 3,375.00', '未完成'],
      ['PO-260616-0002', 'TC-W-MY2226C104', '2026/06/16', 'Xiamen Topcarbon Industrial Technology Co., Ltd', '2026/06/24', 'CNY 28,750.00', '未完成']
    ]
  },
  suppliers: {
    title: '供应商',
    subtitle: '供应商目录 - 联系人 - 付款条款 - 采购历史',
    primary: '新建供应商',
    search: '搜索供应商 / 联系人',
    filter: '全部供应商',
    columns: ['供应商', '联系人', '邮箱', '电话', '币种', '付款条款', '状态', '操作'],
    rows: [
      ['Xiamen Topcarbon Industrial Technology Co., Ltd', 'Mia Chen', 'sales@topcarbon.example', '+86 592 555 0123', 'CNY', '30 天账期', '启用'],
      ['Raceone Components Taiwan', 'Aaron Lin', 'supply@raceone-tw.example', '+886 2 5550 0218', 'USD', '15 天账期', '启用']
    ]
  }
};

const defaultSuppliers = [
  {
    name: 'Xiamen Topcarbon Industrial Technology Co., Ltd',
    contact: 'Mia Chen',
    email: 'sales@topcarbon.example',
    phone: '+86 592 555 0123',
    currency: 'CNY',
    paymentTerms: '30 天账期',
    status: '启用',
    address: '厦门市集美区',
    taxId: '',
    bank: '',
    notes: ''
  },
  {
    name: 'Raceone Components Taiwan',
    contact: 'Aaron Lin',
    email: 'supply@raceone-tw.example',
    phone: '+886 2 5550 0218',
    currency: 'USD',
    paymentTerms: '15 天账期',
    status: '启用',
    address: '',
    taxId: '',
    bank: '',
    notes: ''
  }
];

const defaultCustomers = [
  { name: 'Demo Customer', contact: 'Alex', email: 'customer@example.com', phone: '', currency: 'USD', address: 'Customer address', status: '启用', notes: '' }
];

const defaultSalesInvoices = [];
const defaultDeliveryOrders = [];
const defaultQuotations = [];

const defaultPurchaseInvoices = [
  {
    no: 'PINV-260618-0004',
    ref: 'TC-W-MY2226C106',
    date: '2026-06-18',
    status: '草稿',
    supplier: 'Xiamen Topcarbon Industrial Technology Co., Ltd',
    currency: 'CNY',
    exchangeRate: 1,
    notes: '',
    items: [
      { description: 'RACE AIRE - 40mm · White / Shimano FH', sku: 'RAIRE40-WHT-SH', quantity: 1, unitCost: 3375 }
    ]
  },
  {
    no: 'PINV-260618-0003',
    ref: 'TC-W-MY2226C104',
    date: '2026-06-16',
    status: '草稿',
    supplier: 'Xiamen Topcarbon Industrial Technology Co., Ltd',
    currency: 'CNY',
    exchangeRate: 1,
    notes: '',
    items: [
      { description: 'RACE LUMINA - 52mm · White / Shimano FH', sku: 'RLUM52-WHT-SH', quantity: 4, unitCost: 2875 },
      { description: 'RACE LUMINA - 52mm · Rainbow / Shimano FH', sku: 'RLUM52-RBW-SH', quantity: 2, unitCost: 2875 },
      { description: 'RACE ASTRAL - 59mm · Gold / Shimano FH', sku: 'RAST59-GLD-SH', quantity: 1, unitCost: 2375 },
      { description: 'RACE ASTRAL - 59mm · Rainbow / Shimano FH', sku: 'RAST59-RBW-SH', quantity: 2, unitCost: 2375 },
      { description: 'RACE FYRA - 78mm · Black / SRAM XDR', sku: 'RFYRA78-BLK-SX', quantity: 1, unitCost: 2575 },
      { description: 'RACE FYRA - 78mm · White / Shimano FH', sku: 'RFYRA78-WHT-SH', quantity: 1, unitCost: 2575 },
      { description: 'INTERNATIONAL SHIPPING COST TO ITALY', sku: '', quantity: 1, unitCost: 2300 }
    ]
  },
  {
    no: 'PINV-260618-0002',
    ref: 'TC-W-MY2226C103',
    date: '2026-06-16',
    status: '草稿',
    supplier: 'Xiamen Topcarbon Industrial Technology Co., Ltd',
    currency: 'CNY',
    exchangeRate: 1,
    notes: '',
    items: [
      { description: 'RACE FYRA - 78mm · Black / SRAM XDR', sku: 'RFYRA78-BLK-SX', quantity: 1, unitCost: 2405 }
    ]
  },
  {
    no: 'PINV-260618-0001',
    ref: 'TC-W-MY2226099',
    date: '2026-06-16',
    status: '草稿',
    supplier: 'Xiamen Topcarbon Industrial Technology Co., Ltd',
    currency: 'CNY',
    exchangeRate: 1,
    notes: '',
    items: [
      { description: 'RACE ASTRAL - 59mm · Rainbow / Shimano FH', sku: 'RAST59-RBW-SH', quantity: 1, unitCost: 2555 }
    ]
  }
];

const defaultGoodsReceipts = [];

const defaultCapitalEntries = [
  { date: '2026-06-18', type: '注入', currency: 'CNY', amount: 20000, exchangeRate: 1, method: '银行', description: '创始资金注入' },
  { date: '2026-06-18', type: '注入', currency: 'CNY', amount: 40000, exchangeRate: 1, method: '银行', description: '运营资金' },
  { date: '2026-06-18', type: '注入', currency: 'CNY', amount: 20000, exchangeRate: 1, method: '现金', description: '备用金' },
  { date: '2026-06-18', type: '注入', currency: 'USD', amount: 10000, exchangeRate: 1, method: '在线转账', description: 'Shawn - 隋玉静投资款' }
];

const expenseCategories = ['采购支出', '运输', '关税 / 税费', '仓库租金', '市场 / 广告', '包装', '支付通道费', '物流 / 派送', '员工工资', '杂项'];

const defaultExpenseEntries = [
  { date: '2026-02-05', category: '杂项', currency: 'CNY', amount: 38.23, exchangeRate: 1, method: '在线转账', linked: '', description: '网站服务费' },
  { date: '2025-12-30', category: '杂项', currency: 'CNY', amount: 4040, exchangeRate: 1, method: '在线转账', linked: '', description: '轮组配件采购与物流' },
  { date: '2025-12-12', category: '杂项', currency: 'CNY', amount: 313.6, exchangeRate: 1, method: '在线转账', linked: '', description: 'FBA 相关费用' },
  { date: '2025-12-12', category: '杂项', currency: 'CNY', amount: 240.77, exchangeRate: 1, method: '在线转账', linked: '', description: 'FBA 相关费用' },
  { date: '2025-11-30', category: '杂项', currency: 'CNY', amount: 8300, exchangeRate: 1, method: '在线转账', linked: '', description: 'RACEONE 纸箱定金 50% - 康小平' },
  { date: '2025-11-25', category: '杂项', currency: 'CNY', amount: 1365, exchangeRate: 1, method: '在线转账', linked: '', description: 'REGISTER UCI - LUMINA 52' },
  { date: '2025-08-19', category: '杂项', currency: 'CNY', amount: 9500, exchangeRate: 1, method: '在线转账', linked: '', description: 'RACE ONE 商标注册 TRADEMARK REGISTER - EU' },
  { date: '2025-08-09', category: '杂项', currency: 'CNY', amount: 4809.38, exchangeRate: 1, method: '在线转账', linked: '', description: 'Hong Kong Zhuo xin - Open Company SSM register' },
  { date: '2025-08-09', category: '杂项', currency: 'CNY', amount: 5500, exchangeRate: 1, method: '在线转账', linked: '', description: '广州联雅网络 - Website platform template' },
  { date: '2025-08-08', category: '杂项', currency: 'CNY', amount: 82.74, exchangeRate: 1, method: '在线转账', linked: '', description: 'WEBSITE DOMAIN' }
];

const defaultCurrencies = [
  { code: 'CNY', name: 'Chinese Yuan', symbol: 'CNY', rate: 1, base: true, active: true, updated: '2026-06-18 11:40' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rate: 4.7, base: false, active: true, updated: '2026-06-18 11:40' },
  { code: 'EUR', name: 'Euro', symbol: 'EUR', rate: 7.72, base: false, active: true, updated: '2026-06-18 11:40' },
  { code: 'GBP', name: 'British Pound', symbol: 'GBP', rate: 9.05, base: false, active: true, updated: '2026-06-18 11:40' },
  { code: 'JPY', name: 'Japanese Yen', symbol: 'JPY', rate: 0.047, base: false, active: true, updated: '2026-06-18 11:40' },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', rate: 1.52, base: false, active: true, updated: '2026-06-18 11:40' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rate: 5.3, base: false, active: true, updated: '2026-06-18 11:40' },
  { code: 'USD', name: 'US Dollar', symbol: '$', rate: 7.15, base: false, active: true, updated: '2026-06-18 11:40' }
];

const permissionModules = [
  { key: 'dashboard', label: '仪表盘' },
  { key: 'sales', label: '销售' },
  { key: 'purchasing', label: '采购' },
  { key: 'catalog', label: '产品与库存' },
  { key: 'finance', label: '财务' },
  { key: 'admin', label: '用户与设置' }
];

const defaultRoles = [
  { name: 'Admin', description: '系统管理员，可管理所有模块和权限。', permissions: ['dashboard', 'sales', 'purchasing', 'catalog', 'finance', 'admin'] },
  { name: 'Sales', description: '销售团队，可访问客户、报价、销售与发货流程。', permissions: ['dashboard', 'sales', 'catalog'] },
  { name: 'Warehouse', description: '仓库团队，可管理库存、收货、出库和序列号。', permissions: ['dashboard', 'purchasing', 'catalog'] },
  { name: 'Finance', description: '财务团队，可管理资金、费用、利润表和汇率。', permissions: ['dashboard', 'finance', 'purchasing'] }
];

const defaultUsers = [
  { username: 'raceone', name: 'Race One Admin', role: 'Admin', status: '启用', created: '2026-06-16' },
  { username: 'Chris', name: 'Chris', role: 'Warehouse', status: '启用', created: '2026-06-16' }
];

const defaultSystemSettings = {
  companyName: 'Raceone',
  legalName: 'Raceone Wheels',
  defaultCurrency: 'CNY',
  timezone: 'Asia/Shanghai',
  dateFormat: 'YYYY/MM/DD',
  defaultWarehouse: 'HQ',
  warehouses: [{ name: 'Main Warehouse', location: 'HQ' }],
  lowStockThreshold: 5,
  requireStrongPassword: true,
  allowAutoRateUpdate: true
};

const storageKey = 'raceone-erp-catalog-v1';
const authKey = 'raceone-erp-auth-v1';
const logoutKey = 'raceone-erp-logged-out-v1';
const apiStateUrl = '/api/state';
const defaultTransactions = [
  ['2026/06/17', '入库', 'RACE AIRE - 40mm - Shimano FH / 彩虹', '1', 'HQ', '-'],
  ['2026/06/17', '入库', 'RACE ASTRAL - 59mm - Shimano FH / 彩虹', '1', 'HQ', '-'],
  ['2026/06/17', '入库', 'RACE FYRA - 78mm - Shimano FH / 彩虹', '1', 'HQ', '-']
];

const savedState = loadState();
let products = savedState.products;
let serials = savedState.serials;
let transactions = savedState.transactions;
let suppliers = savedState.suppliers;
let customers = savedState.customers;
let quotations = savedState.quotations;
let purchaseInvoices = savedState.purchaseInvoices;
let salesInvoices = savedState.salesInvoices;
let deliveryOrders = savedState.deliveryOrders;
let goodsReceipts = savedState.goodsReceipts;
let capitalEntries = savedState.capitalEntries;
let expenseEntries = savedState.expenseEntries;
let currencies = savedState.currencies;
let users = savedState.users;
let roles = savedState.roles;
let systemSettings = savedState.systemSettings;
let selectedProduct = Math.min(savedState.selectedProduct, products.length - 1);
let selectedSupplier = 0;
let selectedCustomer = 0;
let selectedQuotation = 0;
let selectedPurchaseInvoice = 0;
let selectedSalesInvoice = 0;
let selectedDeliveryOrder = 0;
let selectedGoodsReceipt = 0;
let selectedCapitalEntry = 0;
let selectedExpenseEntry = 0;
let selectedCurrency = 0;
let selectedUser = 0;
let selectedRole = 0;
let modal = null;
let inventoryTab = 'balance';
let productSearch = '';
let tableSearch = '';
let supplierStatusFilter = '';
let customerStatusFilter = '';
let quotationStatusFilter = '';
let purchaseInvoiceStatusFilter = '';
let salesInvoiceStatusFilter = '';
let deliveryOrderStatusFilter = '';
let goodsReceiptStatusFilter = '';
let invoiceItemSearch = '';
let salesItemSearch = '';
let quotationItemSearch = '';
let customerPickerOpen = '';
let customerPickerSearch = '';
let customerModalReturnPage = '';
let customerModalTarget = '';
let capitalTypeFilter = '';
let expenseCategoryFilter = '';
let profitLossFrom = '2026-01-01';
let profitLossTo = '2026-06-20';
let settingsTab = 'warehouses';
let selectedWarehouse = 0;
let flashMessage = '';
let databaseReady = false;
let stockProductIndex = 0;
let stockVariantIndex = 0;
let stockPickerOpen = false;
let stockPickerSearch = '';
let loginError = '';

function currentUser() {
  const username = localStorage.getItem(authKey) || 'raceone';
  return users.find(user => user.username === username) || users.find(user => user.username === 'raceone') || users[0] || normalizeUser({});
}

function isLoggedIn() {
  return localStorage.getItem(authKey) !== null || localStorage.getItem(logoutKey) !== '1';
}

function currentPage() {
  return location.hash.replace('#/', '') || 'products';
}

function loadState() {
  const fallback = {
    products: defaultProducts.map(product => ({ ...product })),
    serials: [],
    transactions: defaultTransactions.map(row => [...row]),
    suppliers: defaultSuppliers.map(supplier => ({ ...supplier })),
    customers: defaultCustomers.map(customer => normalizeCustomer(customer)),
    quotations: defaultQuotations.map(quote => normalizeQuotation(quote)),
    purchaseInvoices: defaultPurchaseInvoices.map(invoice => normalizePurchaseInvoice(invoice)),
    salesInvoices: defaultSalesInvoices.map(invoice => normalizeSalesInvoice(invoice)),
    deliveryOrders: defaultDeliveryOrders.map(order => normalizeDeliveryOrder(order)),
    goodsReceipts: defaultGoodsReceipts.map(receipt => normalizeGoodsReceipt(receipt)),
    capitalEntries: defaultCapitalEntries.map(entry => normalizeCapitalEntry(entry)),
    expenseEntries: defaultExpenseEntries.map(entry => normalizeExpenseEntry(entry)),
    currencies: defaultCurrencies.map(currency => normalizeCurrency(currency)),
    users: defaultUsers.map(user => normalizeUser(user)),
    roles: defaultRoles.map(role => normalizeRole(role)),
    systemSettings: normalizeSystemSettings(defaultSystemSettings),
    selectedProduct: 0
  };
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey));
    if (!parsed || !Array.isArray(parsed.products)) return fallback;
    return {
      products: parsed.products.length ? parsed.products.map(normalizeProduct) : fallback.products,
      serials: Array.isArray(parsed.serials) ? parsed.serials.map(normalizeSerial) : [],
      transactions: Array.isArray(parsed.transactions) ? parsed.transactions.map(normalizeTransaction) : fallback.transactions,
      suppliers: Array.isArray(parsed.suppliers) ? parsed.suppliers.map(normalizeSupplier) : fallback.suppliers,
      customers: Array.isArray(parsed.customers) ? parsed.customers.map(normalizeCustomer) : fallback.customers,
      quotations: Array.isArray(parsed.quotations) ? parsed.quotations.map(normalizeQuotation) : fallback.quotations,
      purchaseInvoices: Array.isArray(parsed.purchaseInvoices) ? parsed.purchaseInvoices.map(normalizePurchaseInvoice) : fallback.purchaseInvoices,
      salesInvoices: Array.isArray(parsed.salesInvoices) ? parsed.salesInvoices.map(normalizeSalesInvoice) : fallback.salesInvoices,
      deliveryOrders: Array.isArray(parsed.deliveryOrders) ? parsed.deliveryOrders.map(normalizeDeliveryOrder) : fallback.deliveryOrders,
      goodsReceipts: Array.isArray(parsed.goodsReceipts) ? parsed.goodsReceipts.map(normalizeGoodsReceipt) : fallback.goodsReceipts,
      capitalEntries: Array.isArray(parsed.capitalEntries) ? parsed.capitalEntries.map(normalizeCapitalEntry) : fallback.capitalEntries,
      expenseEntries: Array.isArray(parsed.expenseEntries) ? parsed.expenseEntries.map(normalizeExpenseEntry) : fallback.expenseEntries,
      currencies: Array.isArray(parsed.currencies) ? parsed.currencies.map(normalizeCurrency) : fallback.currencies,
      users: Array.isArray(parsed.users) ? parsed.users.map(normalizeUser) : fallback.users,
      roles: Array.isArray(parsed.roles) ? parsed.roles.map(normalizeRole) : fallback.roles,
      systemSettings: normalizeSystemSettings(parsed.systemSettings || fallback.systemSettings),
      selectedProduct: Number.isFinite(parsed.selectedProduct) ? parsed.selectedProduct : 0
    };
  } catch {
    return fallback;
  }
}

function normalizeSupplier(supplier) {
  return {
    name: supplier.name || '',
    contact: supplier.contact || '',
    email: supplier.email || '',
    phone: supplier.phone || '',
    currency: supplier.currency || 'CNY',
    paymentTerms: supplier.paymentTerms || '',
    status: supplier.status === '禁用' ? '禁用' : '启用',
    address: supplier.address || '',
    taxId: supplier.taxId || '',
    bank: supplier.bank || '',
    notes: supplier.notes || ''
  };
}

function normalizeCustomer(customer) {
  return {
    name: customer.name || '',
    contact: customer.contact || '',
    email: customer.email || '',
    phone: customer.phone || '',
    currency: customer.currency || 'USD',
    address: customer.address || '',
    taxId: customer.taxId || '',
    country: customer.country || '',
    shippingAddress: customer.shippingAddress || '',
    status: customer.status === '禁用' ? '禁用' : '启用',
    notes: customer.notes || ''
  };
}

function normalizeSalesInvoice(invoice) {
  return {
    no: invoice.no || nextSalesInvoiceNo(),
    date: invoice.date || '2026-06-21',
    status: invoice.status || '草稿',
    customer: invoice.customer || '',
    currency: invoice.currency || 'USD',
    exchangeRate: Number(invoice.exchangeRate) || currencyRate(invoice.currency || 'USD'),
    notes: invoice.notes || '',
    items: Array.isArray(invoice.items) ? invoice.items.map(item => ({
      description: item.description || '',
      sku: item.sku || '',
      quantity: Number(item.quantity) || 1,
      unitPrice: Number(item.unitPrice) || 0,
      unitCost: Number(item.unitCost) || 0
    })) : []
  };
}

function normalizeQuotation(quote) {
  return {
    no: quote.no || nextQuotationNo(),
    date: quote.date || '2026-06-21',
    status: quote.status || '草稿',
    customer: quote.customer || '',
    currency: quote.currency || 'USD',
    exchangeRate: Number(quote.exchangeRate) || currencyRate(quote.currency || 'USD'),
    notes: quote.notes || '',
    items: Array.isArray(quote.items) ? quote.items.map(item => ({
      description: item.description || '',
      sku: item.sku || '',
      quantity: Number(item.quantity) || 1,
      unitPrice: Number(item.unitPrice) || 0
    })) : []
  };
}

function normalizeDeliveryOrder(order) {
  return {
    no: order.no || nextDeliveryOrderNo(),
    date: order.date || '2026-06-21',
    invoiceNo: order.invoiceNo || '',
    customer: order.customer || '',
    status: order.status || '待发货',
    warehouse: order.warehouse || systemSettings?.defaultWarehouse || 'HQ',
    items: Array.isArray(order.items) ? order.items.map(item => ({
      sku: item.sku || '',
      description: item.description || '',
      quantity: Number(item.quantity) || 1
    })) : []
  };
}

function normalizePurchaseInvoice(invoice) {
  return {
    no: invoice.no || nextPurchaseInvoiceNo(),
    ref: invoice.ref || '',
    date: invoice.date || '2026-06-18',
    status: invoice.status || '草稿',
    supplier: invoice.supplier || '',
    currency: invoice.currency || 'CNY',
    exchangeRate: Number(invoice.exchangeRate) || 1,
    notes: invoice.notes || '',
    items: Array.isArray(invoice.items) ? invoice.items.map(item => ({
      description: item.description || '',
      sku: item.sku || '',
      quantity: Number(item.quantity) || 1,
      unitCost: Number(item.unitCost) || 0
    })) : []
  };
}

function normalizeGoodsReceipt(receipt) {
  return {
    no: receipt.no || nextGoodsReceiptNo(),
    date: receipt.date || '2026-06-18',
    invoiceNo: receipt.invoiceNo || '',
    supplier: receipt.supplier || '',
    status: receipt.status || '已收货',
    warehouse: receipt.warehouse || 'HQ',
    items: Array.isArray(receipt.items) ? receipt.items.map(item => ({
      sku: item.sku || '',
      description: item.description || '',
      batch: item.batch || '-',
      quantity: Number(item.quantity) || 1
    })) : []
  };
}

function normalizeCapitalEntry(entry) {
  return {
    date: entry.date || '2026-06-18',
    type: entry.type || '注入',
    currency: entry.currency || 'CNY',
    amount: Number(entry.amount) || 0,
    exchangeRate: Number(entry.exchangeRate) || 1,
    method: entry.method || '',
    description: entry.description || ''
  };
}

function normalizeExpenseEntry(entry) {
  const linked = entry.linked || '';
  return {
    date: entry.date || '2026-06-18',
    category: linked ? '采购支出' : (expenseCategories.includes(entry.category) ? entry.category : (entry.category || '杂项')),
    currency: entry.currency || 'CNY',
    amount: Number(entry.amount) || 0,
    exchangeRate: Number(entry.exchangeRate) || 1,
    method: entry.method || '',
    linked,
    description: entry.description || ''
  };
}

function normalizeCurrency(currency) {
  const code = String(currency.code || '').trim().toUpperCase();
  return {
    code,
    name: currency.name || code,
    symbol: currency.symbol || code,
    rate: Number(currency.rate) || (code === 'CNY' ? 1 : 0),
    base: code === 'CNY' || Boolean(currency.base),
    active: currency.active !== false,
    updated: currency.updated || ''
  };
}

function normalizeRole(role) {
  const permissions = Array.isArray(role.permissions) ? role.permissions.filter(key => permissionModules.some(module => module.key === key)) : [];
  return {
    name: role.name || '未命名角色',
    description: role.description || '',
    permissions: permissions.length ? permissions : ['dashboard']
  };
}

function normalizeUser(user) {
  return {
    username: user.username || '',
    name: user.name || user.username || '',
    role: user.role || 'Sales',
    status: user.status === '禁用' ? '禁用' : '启用',
    created: user.created || '2026-06-21'
  };
}

function normalizeSystemSettings(settings) {
  const warehouses = Array.isArray(settings.warehouses) && settings.warehouses.length
    ? settings.warehouses.map(normalizeWarehouse)
    : [{ name: settings.defaultWarehouse === 'HQ' ? 'Main Warehouse' : settings.defaultWarehouse || 'Main Warehouse', location: settings.defaultWarehouse || 'HQ' }];
  return {
    companyName: settings.companyName || 'Raceone',
    legalName: settings.legalName || 'Raceone Wheels',
    defaultCurrency: settings.defaultCurrency || 'CNY',
    timezone: settings.timezone || 'Asia/Shanghai',
    dateFormat: settings.dateFormat || 'YYYY/MM/DD',
    defaultWarehouse: settings.defaultWarehouse || warehouses[0]?.location || 'HQ',
    warehouses,
    lowStockThreshold: Number(settings.lowStockThreshold) || 5,
    requireStrongPassword: settings.requireStrongPassword !== false,
    allowAutoRateUpdate: settings.allowAutoRateUpdate !== false
  };
}

function normalizeWarehouse(warehouse) {
  return {
    name: warehouse.name || 'Main Warehouse',
    location: warehouse.location || 'HQ'
  };
}

function nextPurchaseInvoiceNo() {
  const today = compactDate('2026-06-18');
  const count = defaultPurchaseInvoices.length + 1;
  return `PINV-${today}-${String(count).padStart(4, '0')}`;
}

function nextSalesInvoiceNo() {
  const today = compactDate('2026-06-21');
  return `SINV-${today}-0001`;
}

function nextQuotationNo() {
  const today = compactDate('2026-06-21');
  return `QUO-${today}-0001`;
}

function nextDeliveryOrderNo() {
  const today = compactDate('2026-06-21');
  return `DO-${today}-0001`;
}

function nextGoodsReceiptNo() {
  const today = compactDate('2026-06-18');
  const count = goodsReceipts ? goodsReceipts.length + 1 : 1;
  return `GRN-${today}-${String(count).padStart(4, '0')}`;
}

function receiptFromInvoice(invoice) {
  return normalizeGoodsReceipt({
    no: nextGoodsReceiptNo(),
    date: invoice.date || '2026-06-18',
    invoiceNo: invoice.no,
    supplier: invoice.supplier,
    status: '已收货',
    warehouse: 'HQ',
    items: invoice.items
      .filter(item => item.description)
      .map(item => ({
        sku: item.sku,
        description: item.description,
        batch: '-',
        quantity: item.quantity || 1
      }))
  });
}

function addReceiptStock(receipt) {
  receipt.items.forEach(item => {
    transactions.unshift([prettyDate(receipt.date), '入库', item.description, String(item.quantity || 1), receipt.warehouse || 'HQ', receipt.no]);
  });
}

function removeReceiptStock(receipt) {
  transactions = transactions.filter(row => !(row[1] === '入库' && row[5] === receipt.no));
}

function invoiceTotal(invoice) {
  return invoice.items.reduce((sum, item) => sum + Number(item.quantity || 0) * Number(item.unitCost || 0), 0);
}

function salesInvoiceTotal(invoice) {
  return invoice.items.reduce((sum, item) => sum + Number(item.quantity || 0) * Number(item.unitPrice || 0), 0);
}

function quotationTotal(quote) {
  return quote.items.reduce((sum, item) => sum + Number(item.quantity || 0) * Number(item.unitPrice || 0), 0);
}

function salesInvoiceCost(invoice) {
  return invoice.items.reduce((sum, item) => sum + Number(item.quantity || 0) * Number(item.unitCost || 0), 0);
}

function currencyRate(code) {
  return currencies?.find(currency => currency.code === code)?.rate || (code === 'CNY' ? 1 : 1);
}

function money(amount, currency = 'CNY') {
  const prefix = currency === 'USD' ? '$' : `${currency} `;
  return `${prefix}${Number(amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function entryBaseAmount(entry) {
  return Number(entry.amount || 0) * Number(entry.exchangeRate || 1);
}

function parseMoneyValue(value) {
  return Number(String(value || '').replace(/[^\d.-]/g, '')) || 0;
}

function purchaseOrderRows() {
  return purchasingPages['purchase-orders']?.rows || [];
}

function purchaseOrderByNo(poNo) {
  const row = purchaseOrderRows().find(item => item[0] === poNo);
  if (!row) return null;
  return {
    no: row[0],
    supplierRef: row[1],
    date: row[2],
    supplier: row[3],
    eta: row[4],
    total: parseMoneyValue(row[5]),
    status: row[6]
  };
}

function linkedExpenseTotal(poNo, exceptIndex = -1) {
  return expenseEntries.reduce((sum, entry, index) => {
    if (index === exceptIndex || entry.linked !== poNo) return sum;
    return sum + entryBaseAmount(entry);
  }, 0);
}

function validateExpenseEntry(entry, exceptIndex = -1) {
  if (!entry.amount) return { ok: false, field: 'expenseAmount', message: '请输入费用金额' };
  if (!entry.linked) return { ok: true };
  const order = purchaseOrderByNo(entry.linked);
  if (!order) return { ok: false, field: 'expenseLinked', message: '关联采购订单不存在' };
  const used = linkedExpenseTotal(entry.linked, exceptIndex);
  const nextTotal = used + entryBaseAmount(entry);
  if (nextTotal > order.total + 0.0001) {
    const remaining = Math.max(order.total - used, 0);
    return {
      ok: false,
      field: 'expenseAmount',
      message: `${entry.linked} 可登记余额为 ${money(remaining, 'CNY')}，不能超过采购订单总额 ${money(order.total, 'CNY')}`
    };
  }
  return { ok: true };
}

function dateInRange(value, from, to) {
  if (!value) return false;
  return value >= from && value <= to;
}

function monthKey(value) {
  return (value || '').slice(0, 7);
}

function monthLabel(key) {
  const [year, month] = key.split('-');
  return `${year}/${month}`;
}

function currentDateTimeLabel() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}`;
}

function profitLossData(from = profitLossFrom, to = profitLossTo) {
  const scopedExpenses = expenseEntries.filter(entry => dateInRange(entry.date, from, to));
  const scopedSales = salesInvoices.filter(invoice => dateInRange(invoice.date, from, to) && ['已开票', '已付款'].includes(invoice.status));
  const expenses = scopedExpenses.reduce((sum, entry) => sum + entryBaseAmount(entry), 0);
  const expensesByCategory = scopedExpenses.reduce((map, entry) => {
    map[entry.category] = (map[entry.category] || 0) + entryBaseAmount(entry);
    return map;
  }, {});
  const months = [];
  const cursor = new Date(`${from.slice(0, 7)}-01T00:00:00`);
  const end = new Date(`${to.slice(0, 7)}-01T00:00:00`);
  while (cursor <= end) {
    months.push(`${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, '0')}`);
    cursor.setMonth(cursor.getMonth() + 1);
  }
  const monthly = months.map(key => {
    const monthlySales = scopedSales.filter(invoice => monthKey(invoice.date) === key);
    const revenue = monthlySales.reduce((sum, invoice) => sum + salesInvoiceTotal(invoice) * (Number(invoice.exchangeRate) || 1), 0);
    const cogs = monthlySales.reduce((sum, invoice) => sum + salesInvoiceCost(invoice) * (Number(invoice.exchangeRate) || 1), 0);
    const monthlyExpenses = scopedExpenses
      .filter(entry => monthKey(entry.date) === key)
      .reduce((sum, entry) => sum + entryBaseAmount(entry), 0);
    return { key, revenue, cogs, expenses: monthlyExpenses, net: revenue - cogs - monthlyExpenses };
  });
  const revenue = scopedSales.reduce((sum, invoice) => sum + salesInvoiceTotal(invoice) * (Number(invoice.exchangeRate) || 1), 0);
  const cogs = scopedSales.reduce((sum, invoice) => sum + salesInvoiceCost(invoice) * (Number(invoice.exchangeRate) || 1), 0);
  const grossProfit = revenue - cogs;
  const netProfit = grossProfit - expenses;
  return { revenue, cogs, grossProfit, expenses, expensesByCategory, netProfit, monthly };
}

function statementMoney(value) {
  const amount = Math.abs(value);
  const text = money(amount, 'CNY');
  if (value < 0) return `<span class="negative">(${text})</span>`;
  return `<strong>${text}</strong>`;
}

function trendHeight(value, maxValue) {
  return value ? `${Math.max(4, Math.abs(value) / maxValue * 100)}%` : '0%';
}

function normalizeProduct(product) {
  const next = {
    ...product,
    category: product.category === 'Wheelset' ? '轮组' : product.category,
    attributes: Array.isArray(product.attributes) && product.attributes.length ? product.attributes : cloneAttributes(attributes)
  };
  next.variants = Array.isArray(product.variants) && product.variants.length ? product.variants : generateVariantList(next);
  return next;
}

function cloneAttributes(source) {
  return source.map(attr => ({ name: attr.name, values: [...attr.values] }));
}

function productAttributes(product) {
  if (!Array.isArray(product.attributes) || !product.attributes.length) product.attributes = cloneAttributes(attributes);
  return product.attributes;
}

function productVariants(product) {
  if (!Array.isArray(product.variants) || !product.variants.length) product.variants = generateVariantList(product);
  return product.variants;
}

function variantSpec(variant) {
  return variant.options.join(' / ');
}

function selectedVariantSpec(product) {
  return variantSpec(productVariants(product)[0] || { options: ['Shimano FH', '彩虹'] });
}

function stockSelection() {
  const product = products[stockProductIndex] || products[selectedProduct] || products[0];
  const variants = productVariants(product);
  const variant = variants[stockVariantIndex] || variants[0] || { options: [], sku: product.sku };
  return { product, variant };
}

function codeForValue(value) {
  const known = { '白色': 'WHT', '黑色': 'BLK', '彩虹': 'RBW', '金色': 'GLD', 'Shimano FH': 'SH', 'SRAM XDR': 'SX', 'Campagnolo': 'CA' };
  if (known[value]) return known[value];
  const ascii = value.toUpperCase().replace(/[^A-Z0-9]+/g, '').slice(0, 3);
  return ascii || 'OPT';
}

function uniqueSku(baseSku) {
  let sku = baseSku || 'NEWPROD';
  let count = 1;
  const exists = value => products.some(product => product.sku === value);
  while (exists(sku)) {
    count += 1;
    sku = `${baseSku || 'NEWPROD'}${count}`;
  }
  return sku;
}

function generateVariantList(product) {
  const attrs = productAttributes(product).filter(attr => attr.name.trim() && attr.values.length);
  const combos = attrs.reduce((acc, attr) => acc.flatMap(prefix => attr.values.map(value => [...prefix, value])), [[]]);
  return combos.map(options => {
    const existing = product.variants?.find(variant => variant.options?.join('|') === options.join('|'));
    return {
      options,
      sku: `${product.sku}-${options.map(codeForValue).join('-')}`,
      selling: existing ? Number(existing.selling) || 0 : Number(product.price) || 0,
      cost: existing ? Number(existing.cost) || 0 : Number(product.cost) || 0,
      active: existing ? Boolean(existing.active) : true
    };
  });
}

function normalizeTransaction(row) {
  const next = [...row];
  if (next[1] === 'Stock In') next[1] = '入库';
  if (next[1] === 'Stock Out') next[1] = '出库';
  if (typeof next[2] === 'string') next[2] = next[2].replace('Rainbow', '彩虹');
  return next;
}

function normalizeSerial(row) {
  const next = [...row];
  if (next[2] === 'Rainbow') next[2] = '彩虹';
  if (next[4] === 'Available') next[4] = '可用';
  if (next[4] === 'Sold') next[4] = '已售';
  return next;
}

function saveState() {
  const payload = {
    products,
    serials,
    transactions,
    suppliers,
    customers,
    quotations,
    purchaseInvoices,
    salesInvoices,
    deliveryOrders,
    goodsReceipts,
    capitalEntries,
    expenseEntries,
    currencies,
    users,
    roles,
    systemSettings,
    selectedProduct
  };
  localStorage.setItem(storageKey, JSON.stringify(payload));
  return fetch(apiStateUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(response => {
      databaseReady = response.ok;
      return response;
    })
    .catch(() => {
      databaseReady = false;
      return null;
    });
}

async function loadFromDatabase() {
  try {
    const response = await fetch(apiStateUrl);
    if (!response.ok) return;
    const state = await response.json();
    products = state.products.map(normalizeProduct);
    serials = state.serials.map(normalizeSerial);
    transactions = state.transactions.map(normalizeTransaction);
    suppliers = (state.suppliers || defaultSuppliers).map(normalizeSupplier);
    customers = (state.customers || defaultCustomers).map(normalizeCustomer);
    quotations = (state.quotations || defaultQuotations).map(normalizeQuotation);
    purchaseInvoices = (state.purchaseInvoices || defaultPurchaseInvoices).map(normalizePurchaseInvoice);
    salesInvoices = (state.salesInvoices || defaultSalesInvoices).map(normalizeSalesInvoice);
    deliveryOrders = (state.deliveryOrders || defaultDeliveryOrders).map(normalizeDeliveryOrder);
    goodsReceipts = (state.goodsReceipts || defaultGoodsReceipts).map(normalizeGoodsReceipt);
    capitalEntries = (state.capitalEntries || defaultCapitalEntries).map(normalizeCapitalEntry);
    expenseEntries = (state.expenseEntries || defaultExpenseEntries).map(normalizeExpenseEntry);
    currencies = (state.currencies || defaultCurrencies).map(normalizeCurrency);
    users = (state.users || defaultUsers).map(normalizeUser);
    roles = (state.roles || defaultRoles).map(normalizeRole);
    systemSettings = normalizeSystemSettings(state.systemSettings || defaultSystemSettings);
    selectedProduct = Math.min(Number(state.selectedProduct) || 0, products.length - 1);
    databaseReady = true;
    localStorage.setItem(storageKey, JSON.stringify({ products, serials, transactions, suppliers, customers, quotations, purchaseInvoices, salesInvoices, deliveryOrders, goodsReceipts, capitalEntries, expenseEntries, currencies, users, roles, systemSettings, selectedProduct }));
    route(currentPage());
  } catch {
    databaseReady = false;
  }
}

function fieldValue(name, fallback = '') {
  return document.querySelector(`[data-field="${name}"]`)?.value?.trim() || fallback;
}

function prettyDate(value) {
  if (!value) return '2026/06/18';
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

function compactDate(value) {
  return (value || '2026-06-18').replaceAll('-', '').slice(2);
}

function route(page) {
  if (!isLoggedIn()) return renderLogin();
  if (page === 'dashboard') return renderDashboard();
  if (page === 'products') return renderProducts();
  if (page === 'sales-invoices') return renderSalesInvoices();
  if (page.startsWith('sales-invoices/')) return renderSalesInvoiceEditor();
  if (page === 'delivery-orders') return renderDeliveryOrders();
  if (page === 'quotations') return renderQuotations();
  if (page.startsWith('quotations/')) return renderQuotationEditor();
  if (page === 'customers') return renderCustomers();
  if (page === 'inventory') return renderInventory();
  if (page === 'serial-qr') return renderSerials();
  if (page === 'suppliers') return renderSuppliers();
  if (page === 'purchase-invoices') return renderPurchaseInvoices();
  if (page.startsWith('purchase-invoices/')) return renderPurchaseInvoiceEditor();
  if (page === 'goods-receipts') return renderGoodsReceipts();
  if (page === 'capital') return renderCapital();
  if (page === 'expenses') return renderExpenses();
  if (page === 'profit-loss') return renderProfitLoss();
  if (page === 'currencies') return renderCurrencies();
  if (page === 'users') return renderUsers();
  if (page === 'settings') return renderSettings();
  if (purchasingPages[page]) return renderSimplePage(purchasingPages[page]);
  return renderSimplePage({
    title: '即将开放',
    subtitle: '该模块会在产品与库存主流程完成后继续搭建。',
    primary: '新建记录',
    search: '搜索',
    filter: '全部',
    columns: ['模块', '状态', '操作'],
    rows: [[page, '待处理']]
  });
}

function navHtml(page) {
  return nav.map(section => `
    <div class="nav-section">
      ${section.title ? `<p class="nav-title">${section.title}</p>` : ''}
      ${section.items.map(item => `
        <a class="nav-item ${item.page === page ? 'active' : ''}" href="#/${item.page}">
          ${icons[item.icon]}<span>${item.label}</span>
        </a>
      `).join('')}
    </div>
  `).join('');
}

function renderLogin() {
  const message = loginError ? `<div class="login-error">${loginError}</div>` : '';
  document.querySelector('#app').innerHTML = `
    <main class="login-page">
      <section class="login-card">
        <div class="login-brand">
          <div class="brand-mark">${icons.send}</div>
          <div><strong>Raceone</strong><span>库存系统</span></div>
        </div>
        <h1>登录</h1>
        <p>请输入账号和密码继续使用系统。</p>
        ${message}
        <label>用户名<input data-login-username value="raceone" autocomplete="username"></label>
        <label>密码<input data-login-password type="password" autocomplete="current-password" placeholder="请输入密码"></label>
        <button class="btn primary login-submit" data-login-submit>登录</button>
      </section>
    </main>
  `;
  document.querySelector('[data-login-submit]')?.addEventListener('click', handleLogin);
  document.querySelectorAll('[data-login-username], [data-login-password]').forEach(input => {
    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') handleLogin();
    });
  });
}

function handleLogin() {
  const username = document.querySelector('[data-login-username]')?.value.trim() || '';
  const password = document.querySelector('[data-login-password]')?.value || '';
  const user = users.find(item => item.username === username && item.status !== '禁用' && item.status !== '绂佺敤');
  if (!user || password !== '123456') {
    loginError = '用户名或密码不正确';
    return renderLogin();
  }
  localStorage.setItem(authKey, username);
  localStorage.removeItem(logoutKey);
  loginError = '';
  route(currentPage());
}

function shell(content) {
  const page = currentPage();
  const user = currentUser();
  document.querySelector('#app').innerHTML = `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">${icons.send}</div>
          <div><strong>Raceone</strong><span>库存系统</span></div>
        </div>
        <nav class="nav">${navHtml(page)}</nav>
        <div class="sidebar-footer">
          <p class="nav-title">显示币种</p>
          <select class="currency-select"><option>CNY</option><option>USD</option><option>EUR</option></select>
          <small>账本以 CNY 记账。</small>
          <small class="db-status">${databaseReady ? 'SQLite 数据库已连接' : '本地缓存模式'}</small>
          <div class="admin">
            <div class="avatar">${(user.name || user.username || 'R').slice(0, 1).toUpperCase()}</div>
            <div><strong>${user.name || user.username}</strong><span>${user.role || 'Admin'}</span></div>
            <button class="logout-btn" data-logout title="退出登录">${icons.open}</button>
          </div>
        </div>
      </aside>
      <main class="content">${content}</main>
    </div>
    ${modal ? renderModal() : ''}
    ${flashMessage ? `<div class="toast">${flashMessage}</div>` : ''}
  `;
  bindCommon();
  if (flashMessage) {
    const message = flashMessage;
    setTimeout(() => {
      if (flashMessage === message) {
        flashMessage = '';
        route(currentPage());
      }
    }, 1400);
  }
}

function pageHead(title, subtitle, actions = '') {
  return `
    <div class="page-head">
      <div class="page-title"><h1>${title}</h1><p>${subtitle}</p></div>
      <div class="actions">${actions}</div>
    </div>
  `;
}

function renderProducts() {
  const product = products[selectedProduct];
  const filtered = products.filter(p => !productSearch || `${p.name} ${p.sku}`.toLowerCase().includes(productSearch.toLowerCase()));
  const variants = productVariants(product);
  const attrs = productAttributes(product);
  shell(`
    ${pageHead('产品', '维护产品属性、生成变体并设置售价与成本', `<button class="btn primary" data-modal="new-product">${icons.plus}新建产品</button>`)}
    <div class="product-workbench">
      <section class="product-list panel">
        <div class="field list-search">${icons.search}<input class="search" data-product-search placeholder="搜索产品" value="${productSearch}"></div>
        <div class="product-scroll">
          ${filtered.map((p) => {
            const index = products.indexOf(p);
            return `<button class="product-row ${index === selectedProduct ? 'active' : ''}" data-select-product="${index}">
              <strong>${p.name}</strong><span>${p.sku} - ${productVariants(p).length} 个变体</span>
            </button>`;
          }).join('')}
        </div>
      </section>
      <section class="product-detail">
        <div class="panel product-summary">
          <div><h2>${product.name}</h2><p>${product.sku} - ${product.category} - 基础售价 CNY ${product.price.toFixed(2)} / 成本 CNY ${product.cost.toFixed(2)}</p></div>
          <div class="actions">
            <button class="btn">${icons.edit}编辑</button>
            <button class="btn" data-duplicate-product>${icons.copy}复制</button>
            <button class="btn danger" data-delete-product>${icons.trash}</button>
          </div>
        </div>
        <div class="panel attributes-panel">
          <div class="section-head"><h3>属性</h3><div class="mini-actions"><button data-add-attribute="框高">+ 框高</button><button data-add-attribute="颜色">+ 颜色</button><button data-add-attribute="塔基">+ 塔基</button><button data-add-attribute="刹车">+ 刹车</button><button class="dash" data-add-attribute="自定义属性">+ 自定义</button></div></div>
          ${attrs.map((attr, attrIndex) => `
            <div class="attribute-box" data-attribute-index="${attrIndex}">
              <div class="attribute-name"><input data-attr-name="${attrIndex}" value="${attr.name}"><span>${attr.values.length} 个值</span><button class="mini-btn danger-outline" data-remove-attribute="${attrIndex}">${icons.trash}删除属性</button></div>
              <div class="chips">${attr.values.map((v, valueIndex) => `<button class="chip" data-remove-value="${attrIndex}:${valueIndex}">${v} x</button>`).join('')}<input data-value-input="${attrIndex}" placeholder="添加值..."><button class="mini-btn" data-add-value="${attrIndex}">添加</button></div>
            </div>
          `).join('')}
          <div class="attribute-foot"><button class="btn" data-add-manual-variant>+ 手动添加变体</button><button class="btn primary" data-generate-variants>${icons.magic}生成变体</button></div>
        </div>
        <div class="panel variants-panel">
          <div class="section-head"><h3>变体与价格 (${variants.length})</h3><button class="btn primary" data-save-variants>${icons.save}保存</button></div>
          <table>
            <thead><tr>${attrs.map(attr => `<th>${attr.name}</th>`).join('')}<th>SKU</th><th class="right">售价</th><th class="right">成本</th><th>启用</th><th></th></tr></thead>
            <tbody>${variants.map((v, variantIndex) => `
              <tr>${v.options.map(option => `<td>${option}</td>`).join('')}<td><code>${v.sku}</code></td><td><input class="price-input" data-variant-selling="${variantIndex}" value="${v.selling}"></td><td><input class="price-input" data-variant-cost="${variantIndex}" value="${v.cost}"></td><td><input type="checkbox" data-variant-active="${variantIndex}" ${v.active ? 'checked' : ''}></td><td><button class="icon-action" data-delete-variant="${variantIndex}">${icons.trash}</button></td></tr>
            `).join('')}</tbody>
          </table>
        </div>
      </section>
    </div>
  `);
}

function inventoryRows() {
  return products.flatMap(product => productVariants(product)).map((variant, index) => {
    const product = products.find(p => variant.sku.startsWith(p.sku));
    let inQty = index === 7 || index === 10 ? 1 : 0;
    let outQty = 0;
    transactions.forEach(row => {
      if (!row[2].includes(product.name) || !row[2].includes(variantSpec(variant))) return;
      const qty = Number(row[3]) || 0;
      if (row[1] === '入库') inQty += qty;
      if (row[1] === '出库') outQty += qty;
    });
    return [product.name, variant.sku, variantSpec(variant), inQty, outQty, inQty - outQty, '-', '-'];
  });
}

function renderInventory() {
  const balance = inventoryRows().filter(row => !tableSearch || row.join(' ').toLowerCase().includes(tableSearch.toLowerCase()));
  shell(`
    ${pageHead('库存', '按 SKU 自动汇总入库、出库与库存余额', `
      <button class="btn" data-export="inventory">${icons.download}Excel</button>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
      <button class="btn success" data-modal="stock-in">${icons.download}入库</button>
      <button class="btn danger" data-modal="stock-out">${icons.upload}出库</button>
    `)}
    <div class="split-toolbar">
      <div class="tabs"><button class="${inventoryTab === 'balance' ? 'active' : ''}" data-tab="balance">库存余额</button><button class="${inventoryTab === 'transactions' ? 'active' : ''}" data-tab="transactions">出入库流水</button></div>
      <div class="field">${icons.search}<input class="search" data-table-search placeholder="搜索型号 / SKU / 规格" value="${tableSearch}"></div>
    </div>
    ${inventoryTab === 'balance' ? `
      <div class="table-card"><table><thead><tr><th>型号</th><th>SKU</th><th>规格</th><th class="right">入库</th><th class="right">出库</th><th class="right">余额</th><th class="right">平均成本</th><th class="right">库存价值</th></tr></thead><tbody>
        ${balance.map(row => `<tr><td>${row[0]}</td><td><code>${row[1]}</code></td><td>${row[2]}</td><td class="money">${row[3]}</td><td class="money">${row[4]}</td><td class="money ${row[5] ? 'warn' : 'zero'}">${row[5]}</td><td class="money">${row[6]}</td><td class="money">${row[7]}</td></tr>`).join('')}
      </tbody></table></div>
    ` : `
      <div class="table-card"><table><thead><tr><th>日期</th><th>类型</th><th>项目</th><th class="right">数量</th><th>仓库</th><th>批次</th></tr></thead><tbody>
        ${transactions.map(row => `<tr>${row.map((cell, i) => `<td class="${i === 3 ? 'money' : ''}">${cell}</td>`).join('')}</tr>`).join('')}
      </tbody></table></div>
    `}
  `);
}

function renderSerials() {
  const rows = serials.filter(row => !tableSearch || row.join(' ').toLowerCase().includes(tableSearch.toLowerCase()));
  shell(`
    ${pageHead('序列号 / QR 追踪', '每套轮组一个唯一序列号 (RW-YYMMDD-XXXX)，可用于 QR 标签', `
      <button class="btn" data-export="serials">${icons.download}Excel</button>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
      <button class="btn primary" data-modal="generate-serials">${icons.plus}生成序列号</button>
    `)}
    <div class="toolbar">
      <div class="field">${icons.search}<input class="search" data-table-search placeholder="搜索序列号 / 型号" value="${tableSearch}"></div>
      <select class="select"><option>全部状态</option><option>可用</option><option>已售</option></select>
    </div>
    <div class="table-card"><table><thead><tr><th>序列号</th><th>型号</th><th>颜色</th><th>到货日期</th><th>状态</th><th class="right">QR</th></tr></thead><tbody>
      ${rows.length ? rows.map(row => `<tr>${row.slice(0, 5).map(cell => `<td>${cell}</td>`).join('')}<td class="right"><div class="qr-cell">${qrSvg(row[0])}<span>${row[0]}</span></div></td></tr>`).join('') : `<tr><td colspan="6"><div class="empty">暂无序列号。请为已到货轮组生成序列号。</div></td></tr>`}
    </tbody></table></div>
  `);
}

function dashboardData() {
  const rows = inventoryRows();
  const stockByModel = rows.reduce((map, row) => {
    map[row[0]] = (map[row[0]] || 0) + Number(row[5] || 0);
    return map;
  }, {});
  const unitsInStock = rows.reduce((sum, row) => sum + Math.max(Number(row[5] || 0), 0), 0);
  const modelsInStock = Object.values(stockByModel).filter(value => value > 0).length;
  const lowRows = rows.filter(row => Number(row[5] || 0) <= 0);
  const revenue = salesInvoices.reduce((sum, invoice) => sum + salesInvoiceTotal(invoice) * (Number(invoice.exchangeRate) || 1), 0);
  const salesCost = salesInvoices.reduce((sum, invoice) => sum + salesInvoiceCost(invoice) * (Number(invoice.exchangeRate) || 1), 0);
  const purchaseCost = purchaseInvoices.reduce((sum, invoice) => sum + invoiceTotal(invoice) * (Number(invoice.exchangeRate) || 1), 0);
  const expenses = expenseEntries.reduce((sum, entry) => sum + entryBaseAmount(entry), 0);
  const netProfit = revenue - salesCost - expenses;
  const months = ['2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06'];
  const trend = months.map(key => {
    const sales = salesInvoices
      .filter(invoice => monthKey(invoice.date) === key)
      .reduce((sum, invoice) => sum + salesInvoiceTotal(invoice) * (Number(invoice.exchangeRate) || 1), 0);
    const cost = salesInvoices
      .filter(invoice => monthKey(invoice.date) === key)
      .reduce((sum, invoice) => sum + salesInvoiceCost(invoice) * (Number(invoice.exchangeRate) || 1), 0);
    const monthlyExpenses = expenseEntries
      .filter(entry => monthKey(entry.date) === key)
      .reduce((sum, entry) => sum + entryBaseAmount(entry), 0);
    return { key, sales, cost, profit: sales - cost - monthlyExpenses };
  });
  const thisMonthExpenses = expenseEntries.filter(entry => monthKey(entry.date) === '2026-06');
  const expenseByCategory = thisMonthExpenses.reduce((map, entry) => {
    map[entry.category] = (map[entry.category] || 0) + entryBaseAmount(entry);
    return map;
  }, {});
  const quotePipeline = ['草稿', '已发送', '已接受', '已拒绝', '已过期'].map(status => ({ status, count: quotations.filter(quote => quote.status === status).length }));
  return { rows, stockByModel, unitsInStock, modelsInStock, lowRows, revenue, salesCost, purchaseCost, expenses, netProfit, trend, expenseByCategory, quotePipeline };
}

function renderDashboard() {
  const data = dashboardData();
  const modelBars = Object.entries(data.stockByModel).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const maxStock = Math.max(1, ...modelBars.map(([, value]) => value));
  const maxTrend = Math.max(1, ...data.trend.flatMap(item => [Math.abs(item.sales), Math.abs(item.cost), Math.abs(item.profit)]));
  const incomingOrders = (purchasingPages['purchase-orders']?.rows || []).filter(row => row[6] !== '已完成');
  shell(`
    ${pageHead('仪表盘', '库存、销售、采购和财务的实时概览')}
    <div class="cards dashboard-kpis">
      <div class="metric dash-metric stock"><span>库存数量</span><strong>${data.unitsInStock}</strong><small>${data.modelsInStock} 个型号</small></div>
      <div class="metric dash-metric warning"><span>低库存 / 缺货</span><strong>${data.lowRows.length}</strong><small>${data.lowRows.filter(row => Number(row[5]) <= 0).length} 个缺货</small></div>
      <div class="metric dash-metric revenue"><span>收入 (CNY)</span><strong>${money(data.revenue, 'CNY')}</strong><small>${money(data.revenue, 'CNY')} 已开票</small></div>
      <div class="metric dash-metric profit"><span>净利润（估算）</span><strong class="${data.netProfit < 0 ? 'negative' : ''}">${data.netProfit < 0 ? '-' : ''}${money(Math.abs(data.netProfit), 'CNY')}</strong><small>COGS ${money(data.salesCost, 'CNY')} · 费用 ${money(data.expenses, 'CNY')}</small></div>
    </div>

    <section class="panel dashboard-panel">
      <h2>报价管道</h2>
      <div class="pipeline-grid">
        ${data.quotePipeline.map((item, index) => `<div class="pipeline-card"><strong>${item.count}</strong><span class="badge ${index === 2 ? 'active' : index === 3 ? 'cancelled' : 'neutral'}">${item.status}</span></div>`).join('')}
      </div>
    </section>

    <div class="dashboard-grid">
      <section class="panel dashboard-panel">
        <h2>按型号库存</h2>
        <div class="stock-chart">
          ${modelBars.map(([model, value]) => `<div class="stock-chart-item"><div class="stock-bar-wrap"><span style="height:${trendHeight(value, maxStock)}"></span></div><small title="${model}">${model}</small></div>`).join('') || '<div class="empty">暂无库存数据</div>'}
        </div>
      </section>
      <section class="panel dashboard-panel">
        <h2>收入 vs 成本 vs 利润（6 个月）</h2>
        <div class="mini-trend">
          ${data.trend.map(item => `<div class="mini-trend-month"><div class="mini-trend-bars"><span class="sales" style="height:${trendHeight(item.sales, maxTrend)}"></span><span class="cost" style="height:${trendHeight(item.cost, maxTrend)}"></span><span class="profit" style="height:${trendHeight(item.profit, maxTrend)}"></span></div><small>${monthLabel(item.key)}</small></div>`).join('')}
        </div>
        <div class="trend-legend"><span class="net"></span>收入 <span class="cogs"></span>成本 <span class="revenue"></span>利润</div>
      </section>
      <section class="panel dashboard-panel tall">
        <div class="section-head"><h2>本月费用结构</h2><strong>${money(Object.values(data.expenseByCategory).reduce((sum, value) => sum + value, 0), 'CNY')}</strong></div>
        ${Object.entries(data.expenseByCategory).length ? `<div class="expense-list">${Object.entries(data.expenseByCategory).map(([category, amount]) => `<div><span>${category}</span><strong>${money(amount, 'CNY')}</strong></div>`).join('')}</div>` : '<div class="empty">本月暂无费用记录</div>'}
      </section>
      <section class="panel dashboard-panel tall">
        <h2>畅销型号</h2>
        <div class="empty">暂无销售数据</div>
      </section>
      <section class="panel dashboard-panel">
        <h2 class="warning-title">低库存提醒</h2>
        <table><thead><tr><th>SKU</th><th class="right">余额</th></tr></thead><tbody>
          ${data.lowRows.slice(0, 8).map(row => `<tr><td>${row[0]} · ${row[2]}</td><td class="right zero">${row[5]}</td></tr>`).join('') || '<tr><td colspan="2"><div class="empty">暂无低库存提醒</div></td></tr>'}
        </tbody></table>
      </section>
      <section class="panel dashboard-panel">
        <h2>即将到货采购订单</h2>
        <table><thead><tr><th>PO 号</th><th>供应商</th><th>ETA</th><th>状态</th></tr></thead><tbody>
          ${incomingOrders.map(row => `<tr><td>${row[0]}</td><td>${row[3]}</td><td>${prettyDate(row[4])}</td><td>${row[6]}</td></tr>`).join('') || '<tr><td colspan="4"><div class="empty">暂无即将到货采购订单</div></td></tr>'}
        </tbody></table>
      </section>
    </div>
  `);
}

function renderSalesInvoices() {
  const rows = salesInvoices.filter(invoice => {
    const text = `${invoice.no} ${invoice.customer}`.toLowerCase();
    const matchesSearch = !tableSearch || text.includes(tableSearch.toLowerCase());
    const matchesStatus = !salesInvoiceStatusFilter || invoice.status === salesInvoiceStatusFilter;
    return matchesSearch && matchesStatus;
  });
  shell(`
    ${pageHead('销售发票', '主要销售单据 - 支持多币种 - 可编辑 A4 单据并生成发货单', `
      <button class="btn" data-export="sales-invoices">${icons.download}Excel</button>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
      <button class="btn primary" data-new-sales-invoice>${icons.plus}新建发票</button>
    `)}
    <div class="toolbar">
      <div class="field">${icons.search}<input class="search" data-table-search placeholder="搜索发票 / 客户" value="${tableSearch}"></div>
      <select class="select" data-sales-status-filter><option value="">全部状态</option><option ${salesInvoiceStatusFilter === '草稿' ? 'selected' : ''}>草稿</option><option ${salesInvoiceStatusFilter === '已开票' ? 'selected' : ''}>已开票</option><option ${salesInvoiceStatusFilter === '已付款' ? 'selected' : ''}>已付款</option></select>
    </div>
    <div class="table-card"><table><thead><tr><th>发票号</th><th>日期</th><th>客户</th><th>币种</th><th>总额</th><th>本位币 (CNY)</th><th>状态</th><th class="right">操作</th></tr></thead><tbody>
      ${rows.map(invoice => {
        const index = salesInvoices.indexOf(invoice);
        const total = salesInvoiceTotal(invoice);
        return `<tr><td>${invoice.no}</td><td>${prettyDate(invoice.date)}</td><td>${invoice.customer || '-'}</td><td>${invoice.currency}</td><td>${money(total, invoice.currency)}</td><td>${money(total * invoice.exchangeRate, 'CNY')}</td><td>${invoice.status}</td><td><button class="link-action" data-open-sales-invoice="${index}">${icons.open}打开</button></td></tr>`;
      }).join('') || `<tr><td colspan="8"><div class="empty">暂无销售发票，请创建第一张。</div></td></tr>`}
    </tbody></table></div>
  `);
}

function renderQuotations() {
  const rows = quotations.filter(quote => {
    const text = `${quote.no} ${quote.customer}`.toLowerCase();
    const matchesSearch = !tableSearch || text.includes(tableSearch.toLowerCase());
    const matchesStatus = !quotationStatusFilter || quote.status === quotationStatusFilter;
    return matchesSearch && matchesStatus;
  });
  shell(`
    ${pageHead('报价单', '客户报价单 - 已接受报价可转换为销售发票', `
      <button class="btn" data-export="quotations">${icons.download}Excel</button>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
      <button class="btn primary" data-new-quotation>${icons.plus}新建报价单</button>
    `)}
    <div class="toolbar">
      <div class="field">${icons.search}<input class="search" data-table-search placeholder="搜索报价单 / 客户" value="${tableSearch}"></div>
      <select class="select" data-quotation-status-filter><option value="">全部状态</option><option ${quotationStatusFilter === '草稿' ? 'selected' : ''}>草稿</option><option ${quotationStatusFilter === '已发送' ? 'selected' : ''}>已发送</option><option ${quotationStatusFilter === '已接受' ? 'selected' : ''}>已接受</option><option ${quotationStatusFilter === '已拒绝' ? 'selected' : ''}>已拒绝</option><option ${quotationStatusFilter === '已过期' ? 'selected' : ''}>已过期</option></select>
    </div>
    <div class="table-card"><table><thead><tr><th>报价单号</th><th>日期</th><th>客户</th><th>币种</th><th>总额</th><th>本位币 (CNY)</th><th>状态</th><th class="right">操作</th></tr></thead><tbody>
      ${rows.map(quote => {
        const index = quotations.indexOf(quote);
        const total = quotationTotal(quote);
        return `<tr><td>${quote.no}</td><td>${prettyDate(quote.date)}</td><td>${quote.customer || '-'}</td><td>${quote.currency}</td><td>${money(total, quote.currency)}</td><td>${money(total * quote.exchangeRate, 'CNY')}</td><td>${quote.status}</td><td><button class="link-action" data-open-quotation="${index}">${icons.open}打开</button></td></tr>`;
      }).join('') || `<tr><td colspan="8"><div class="empty">暂无报价单，请创建第一张。</div></td></tr>`}
    </tbody></table></div>
  `);
}

function currentQuotationIndex() {
  const [, rawIndex] = currentPage().split('/');
  const index = Number(rawIndex);
  if (Number.isFinite(index) && quotations[index]) return index;
  return Math.min(selectedQuotation, quotations.length - 1);
}

function activeQuotation() {
  selectedQuotation = Math.max(0, currentQuotationIndex());
  return quotations[selectedQuotation] || quotations[0];
}

function renderQuotationEditor() {
  const quote = activeQuotation();
  if (!quote) return renderQuotations();
  const customer = selectedCustomerInfo(quote.customer);
  const total = quotationTotal(quote);
  const base = total * (Number(quote.exchangeRate) || 1);
  shell(`
    <div class="invoice-stage">
      <article class="invoice-paper">
        <div class="invoice-top">
          <div><h2>RACEONE</h2><p>Raceone Wheelsets · Carbon Wheelsets</p></div>
          <div class="invoice-meta">
            <h1>报价单</h1>
            <label>报价单号<input data-field="quoteNo" value="${quote.no}" placeholder="草稿编号"></label>
            <label>日期<input data-field="quoteDate" type="date" value="${quote.date}"></label>
            <label>状态<select data-field="quoteStatus"><option ${quote.status === '草稿' ? 'selected' : ''}>草稿</option><option ${quote.status === '已发送' ? 'selected' : ''}>已发送</option><option ${quote.status === '已接受' ? 'selected' : ''}>已接受</option><option ${quote.status === '已拒绝' ? 'selected' : ''}>已拒绝</option><option ${quote.status === '已过期' ? 'selected' : ''}>已过期</option></select></label>
          </div>
        </div>
        <div class="invoice-line"></div>
        <div class="invoice-parties">
          <section>
            <span class="invoice-label">报价对象</span>
            <div class="supplier-select-row">${customerPicker('quote', quote.customer)}<button class="btn icon-only" data-new-inline-customer="quote">${icons.edit}</button></div>
            ${customer.name ? `<strong>${customer.name}</strong><p>${customer.address || ''}</p><p>${customer.contact || ''} ${customer.phone || ''}</p>` : `<p class="muted">未选择客户</p>`}
          </section>
          <section class="currency-box">
            <label>币种<select data-field="quoteCurrency">${currencies.filter(c => c.active).map(c => `<option value="${c.code}" ${quote.currency === c.code ? 'selected' : ''}>${c.code}</option>`).join('')}</select></label>
            <label>1 ${quote.currency} =<input data-field="quoteRate" type="number" step="0.0001" value="${quote.exchangeRate}"> CNY</label>
          </section>
        </div>
        <table class="invoice-items"><thead><tr><th>#</th><th>描述</th><th class="right">数量</th><th class="right">单价</th><th class="right">金额</th><th></th></tr></thead><tbody>
          ${quote.items.map((item, index) => `<tr><td>${index + 1}</td><td><input data-quote-desc="${index}" value="${item.description}"><code>${item.sku}</code></td><td><input class="right" data-quote-qty="${index}" type="number" min="1" value="${item.quantity}"></td><td><input class="right" data-quote-price="${index}" type="number" min="0" step="0.01" value="${item.unitPrice}"></td><td class="right" data-quote-amount="${index}">${money(item.quantity * item.unitPrice, quote.currency)}</td><td><button class="icon-action" data-remove-quote-item="${index}">${icons.trash}</button></td></tr>`).join('') || `<tr><td colspan="6"><div class="empty">暂无明细，点击“添加项目”。</div></td></tr>`}
        </tbody></table>
        <button class="mini-btn dashed" data-modal="add-quote-items">${icons.plus}添加项目</button>
        <div class="invoice-summary"><div></div><div><strong>合计</strong><strong data-quote-total>${money(total, quote.currency)}</strong><span>折合 CNY</span><span data-quote-base>${money(base, 'CNY')}</span></div></div>
        <label class="invoice-notes"><span>备注</span><textarea data-field="quoteNotes" placeholder="付款条款、备注...">${quote.notes}</textarea></label>
        <footer>感谢您的合作 - Raceone Wheelsets</footer>
      </article>
    </div>
    <div class="invoice-actionbar">
      <button class="btn ghost" data-back-quotations>← 返回</button>
      <button class="btn danger-text" data-delete-quotation>${icons.trash}删除</button>
      <span></span>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
      <button class="btn" onclick="window.print()">${icons.download}打印</button>
      <button class="btn success" data-convert-quote>${icons.file}转换为销售发票</button>
      <button class="btn primary" data-save-quotation>${icons.save}保存</button>
    </div>
  `);
}

function currentSalesInvoiceIndex() {
  const [, rawIndex] = currentPage().split('/');
  const index = Number(rawIndex);
  if (Number.isFinite(index) && salesInvoices[index]) return index;
  return Math.min(selectedSalesInvoice, salesInvoices.length - 1);
}

function activeSalesInvoice() {
  selectedSalesInvoice = Math.max(0, currentSalesInvoiceIndex());
  return salesInvoices[selectedSalesInvoice] || salesInvoices[0];
}

function customerOptions(selected) {
  return customers.map(customer => `<option value="${customer.name}" ${customer.name === selected ? 'selected' : ''}>${customer.name}</option>`).join('');
}

function customerPicker(kind, selected) {
  const fieldName = kind === 'quote' ? 'quoteCustomer' : 'salesCustomer';
  const term = customerPickerSearch.trim().toLowerCase();
  const filtered = customers.filter(customer => {
    const text = `${customer.name} ${customer.contact} ${customer.email} ${customer.phone}`.toLowerCase();
    return !term || text.includes(term);
  });
  const isOpen = customerPickerOpen === kind;
  return `
    <div class="customer-picker">
      <button type="button" class="customer-select" data-toggle-customer-picker="${kind}">
        <span>${selected || '选择客户'}</span>
        <span class="customer-caret">⌄</span>
      </button>
      <input type="hidden" data-field="${fieldName}" value="${selected || ''}">
      ${isOpen ? `
        <div class="customer-menu">
          <div class="customer-search">${icons.search}<input data-customer-picker-search="${kind}" placeholder="搜索客户..." value="${customerPickerSearch}"></div>
          <div class="customer-results">
            ${filtered.map(customer => {
              const index = customers.indexOf(customer);
              return `<button type="button" data-pick-customer="${kind}:${index}"><strong>${customer.name}</strong><span>${customer.contact || customer.email || customer.phone || ''}</span></button>`;
            }).join('') || '<div class="empty compact">没有匹配客户</div>'}
          </div>
          <button type="button" class="customer-new" data-new-inline-customer="${kind}">${icons.plus}新建客户</button>
        </div>
      ` : ''}
    </div>
  `;
}

function selectedCustomerInfo(name) {
  return customers.find(customer => customer.name === name) || { name: '', address: '', contact: '', phone: '', currency: 'USD' };
}

function renderSalesInvoiceEditor() {
  const invoice = activeSalesInvoice();
  if (!invoice) return renderSalesInvoices();
  const customer = selectedCustomerInfo(invoice.customer);
  const total = salesInvoiceTotal(invoice);
  const base = total * (Number(invoice.exchangeRate) || 1);
  shell(`
    <div class="invoice-stage">
      <article class="invoice-paper">
        <div class="invoice-top">
          <div><h2>RACEONE</h2><p>Raceone Wheelsets · Carbon Wheelsets</p></div>
          <div class="invoice-meta">
            <h1>销售发票</h1>
            <label>发票号<input data-field="salesNo" value="${invoice.no}" placeholder="草稿编号"></label>
            <label>日期<input data-field="salesDate" type="date" value="${invoice.date}"></label>
            <label>状态<select data-field="salesStatus"><option ${invoice.status === '草稿' ? 'selected' : ''}>草稿</option><option ${invoice.status === '已开票' ? 'selected' : ''}>已开票</option><option ${invoice.status === '已付款' ? 'selected' : ''}>已付款</option></select></label>
          </div>
        </div>
        <div class="invoice-line"></div>
        <div class="invoice-parties">
          <section>
            <span class="invoice-label">客户</span>
            <div class="supplier-select-row">
              ${customerPicker('sales', invoice.customer)}
              <button class="btn icon-only" data-new-inline-customer="sales">${icons.edit}</button>
            </div>
            ${customer.name ? `<strong>${customer.name}</strong><p>${customer.address || ''}</p><p>${customer.contact || ''} ${customer.phone || ''}</p>` : `<p class="muted">未选择客户</p>`}
          </section>
          <section class="currency-box">
            <label>币种<select data-field="salesCurrency">${currencies.filter(c => c.active).map(c => `<option value="${c.code}" ${invoice.currency === c.code ? 'selected' : ''}>${c.code}</option>`).join('')}</select></label>
            <label>1 ${invoice.currency} =<input data-field="salesRate" type="number" step="0.0001" value="${invoice.exchangeRate}"> CNY</label>
          </section>
        </div>
        <table class="invoice-items"><thead><tr><th>#</th><th>描述</th><th class="right">数量</th><th class="right">单价</th><th class="right">成本</th><th class="right">金额</th><th></th></tr></thead><tbody>
          ${invoice.items.map((item, index) => `<tr>
            <td>${index + 1}</td>
            <td><input data-sales-desc="${index}" value="${item.description}"><code>${item.sku}</code></td>
            <td><input class="right" data-sales-qty="${index}" type="number" min="1" value="${item.quantity}"></td>
            <td><input class="right" data-sales-price="${index}" type="number" min="0" step="0.01" value="${item.unitPrice}"></td>
            <td><input class="right" data-sales-cost="${index}" type="number" min="0" step="0.01" value="${item.unitCost}"></td>
            <td class="right" data-sales-amount="${index}">${money(item.quantity * item.unitPrice, invoice.currency)}</td>
            <td><button class="icon-action" data-remove-sales-item="${index}">${icons.trash}</button></td>
          </tr>`).join('') || `<tr><td colspan="7"><div class="empty">暂无明细，点击“添加项目”。</div></td></tr>`}
        </tbody></table>
        <button class="mini-btn dashed" data-modal="add-sales-items">${icons.plus}添加项目</button>
        <div class="invoice-summary"><div></div><div><strong>合计</strong><strong data-sales-total>${money(total, invoice.currency)}</strong><span>折合 CNY</span><span data-sales-base>${money(base, 'CNY')}</span></div></div>
        <label class="invoice-notes"><span>备注</span><textarea data-field="salesNotes" placeholder="付款条款、备注...">${invoice.notes}</textarea></label>
        <footer>感谢您的合作 - Raceone Wheelsets</footer>
      </article>
    </div>
    <div class="invoice-actionbar">
      <button class="btn ghost" data-back-sales-invoices>← 返回</button>
      <button class="btn danger-text" data-delete-sales-invoice>${icons.trash}删除</button>
      <span></span>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
      <button class="btn" onclick="window.print()">${icons.download}打印</button>
      <button class="btn success" data-generate-delivery-order>${icons.send}生成发货单</button>
      <button class="btn primary" data-save-sales-invoice>${icons.save}保存</button>
    </div>
  `);
}

function renderDeliveryOrders() {
  const rows = deliveryOrders.filter(order => {
    const text = `${order.no} ${order.invoiceNo} ${order.customer}`.toLowerCase();
    const matchesSearch = !tableSearch || text.includes(tableSearch.toLowerCase());
    const matchesStatus = !deliveryOrderStatusFilter || order.status === deliveryOrderStatusFilter;
    return matchesSearch && matchesStatus;
  });
  shell(`
    ${pageHead('发货单', '由销售发票生成，发货会自动扣减库存')}
    <div class="toolbar"><div class="field">${icons.search}<input class="search" data-table-search placeholder="搜索发货单 / 发票 / 客户" value="${tableSearch}"></div><select class="select" data-delivery-status-filter><option value="">全部状态</option><option ${deliveryOrderStatusFilter === '待发货' ? 'selected' : ''}>待发货</option><option ${deliveryOrderStatusFilter === '已发货' ? 'selected' : ''}>已发货</option></select></div>
    <div class="table-card"><table><thead><tr><th>发货单号</th><th>日期</th><th>销售发票</th><th>客户</th><th>仓库</th><th>数量</th><th>状态</th><th class="right">操作</th></tr></thead><tbody>
      ${rows.map(order => {
        const index = deliveryOrders.indexOf(order);
        const qty = order.items.reduce((sum, item) => sum + item.quantity, 0);
        return `<tr><td>${order.no}</td><td>${prettyDate(order.date)}</td><td>${order.invoiceNo}</td><td>${order.customer}</td><td>${order.warehouse}</td><td>${qty}</td><td><span class="badge ${order.status === '已发货' ? 'active' : 'pending'}">${order.status}</span></td><td><div class="inline-actions"><button class="link-action" data-ship-order="${index}">${icons.send}发货</button><button class="icon-action" data-delete-delivery="${index}">${icons.trash}</button></div></td></tr>`;
      }).join('') || `<tr><td colspan="8"><div class="empty">暂无发货单。请从销售发票生成。</div></td></tr>`}
    </tbody></table></div>
  `);
}

function renderCustomers() {
  const rows = customers.filter(customer => {
    const text = `${customer.name} ${customer.contact} ${customer.email}`.toLowerCase();
    const matchesSearch = !tableSearch || text.includes(tableSearch.toLowerCase());
    const matchesStatus = !customerStatusFilter || customer.status === customerStatusFilter;
    return matchesSearch && matchesStatus;
  });
  shell(`
    ${pageHead('客户', '客户资料、联系人和默认币种', `<button class="btn primary" data-modal="customer">${icons.plus}新增客户</button>`)}
    <div class="toolbar"><div class="field">${icons.search}<input class="search" data-table-search placeholder="搜索客户 / 联系人" value="${tableSearch}"></div><select class="select" data-customer-status-filter><option value="">全部客户</option><option ${customerStatusFilter === '启用' ? 'selected' : ''}>启用</option><option ${customerStatusFilter === '禁用' ? 'selected' : ''}>禁用</option></select></div>
    <div class="table-card"><table><thead><tr><th>客户</th><th>联系人</th><th>邮箱</th><th>电话</th><th>币种</th><th>状态</th><th class="right">操作</th></tr></thead><tbody>
      ${rows.map(customer => {
        const index = customers.indexOf(customer);
        return `<tr><td>${customer.name}</td><td>${customer.contact}</td><td>${customer.email}</td><td>${customer.phone}</td><td>${customer.currency}</td><td>${customer.status}</td><td><div class="inline-actions"><button class="link-action" data-open-customer="${index}">${icons.open}打开</button><button class="icon-action" data-delete-customer="${index}">${icons.trash}</button></div></td></tr>`;
      }).join('') || `<tr><td colspan="7"><div class="empty">暂无客户</div></td></tr>`}
    </tbody></table></div>
  `);
}

function renderPurchaseInvoices() {
  const rows = purchaseInvoices.filter(invoice => {
    const text = `${invoice.no} ${invoice.ref} ${invoice.supplier}`.toLowerCase();
    const matchesSearch = !tableSearch || text.includes(tableSearch.toLowerCase());
    const matchesStatus = !purchaseInvoiceStatusFilter || invoice.status === purchaseInvoiceStatusFilter;
    return matchesSearch && matchesStatus;
  });
  shell(`
    ${pageHead('采购发票', '主要采购单据 - 支持多币种 - 可编辑 A4 单据并生成收货单', `
      <button class="btn" data-export="purchase-invoices">${icons.download}Excel</button>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
      <button class="btn primary" data-new-purchase-invoice>${icons.plus}新建发票</button>
    `)}
    <div class="toolbar">
      <div class="field">${icons.search}<input class="search" data-table-search placeholder="搜索发票 / 供应商" value="${tableSearch}"></div>
      <select class="select" data-purchase-status-filter><option value="">全部状态</option><option ${purchaseInvoiceStatusFilter === '草稿' ? 'selected' : ''}>草稿</option><option ${purchaseInvoiceStatusFilter === '已确认' ? 'selected' : ''}>已确认</option><option ${purchaseInvoiceStatusFilter === '已收货' ? 'selected' : ''}>已收货</option></select>
    </div>
    <div class="table-card"><table><thead><tr><th>发票号</th><th>参考号</th><th>日期</th><th>供应商</th><th>币种</th><th>总额</th><th>本位币 (CNY)</th><th>状态</th><th>操作</th></tr></thead><tbody>
      ${rows.map(invoice => {
        const index = purchaseInvoices.indexOf(invoice);
        const total = invoiceTotal(invoice);
        const base = total * (Number(invoice.exchangeRate) || 1);
        return `<tr><td>${invoice.no}</td><td>${invoice.ref || '-'}</td><td>${prettyDate(invoice.date)}</td><td>${invoice.supplier || '-'}</td><td>${invoice.currency}</td><td>${money(total, invoice.currency)}</td><td>${money(base, 'CNY')}</td><td>${invoice.status}</td><td><button class="link-action" data-open-purchase-invoice="${index}">${icons.open}打开</button></td></tr>`;
      }).join('') || `<tr><td colspan="9"><div class="empty">暂无采购发票</div></td></tr>`}
    </tbody></table></div>
  `);
}

function currentInvoiceIndex() {
  const page = currentPage();
  const [, rawIndex] = page.split('/');
  const index = Number(rawIndex);
  if (Number.isFinite(index) && purchaseInvoices[index]) return index;
  return Math.min(selectedPurchaseInvoice, purchaseInvoices.length - 1);
}

function activeInvoice() {
  const index = currentInvoiceIndex();
  selectedPurchaseInvoice = Math.max(0, index);
  return purchaseInvoices[selectedPurchaseInvoice] || purchaseInvoices[0];
}

function supplierOptions(selected) {
  return suppliers.map(supplier => `<option value="${supplier.name}" ${supplier.name === selected ? 'selected' : ''}>${supplier.name}</option>`).join('');
}

function selectedSupplierInfo(name) {
  return suppliers.find(supplier => supplier.name === name) || { name: '', address: '', contact: '', phone: '', paymentTerms: '' };
}

function renderPurchaseInvoiceEditor() {
  const invoice = activeInvoice();
  if (!invoice) return renderPurchaseInvoices();
  const supplier = selectedSupplierInfo(invoice.supplier);
  const total = invoiceTotal(invoice);
  const base = total * (Number(invoice.exchangeRate) || 1);
  shell(`
    <div class="invoice-stage">
      <article class="invoice-paper">
        <div class="invoice-top">
          <div>
            <h2>RACEONE</h2>
            <p>Raceone Wheelsets · Carbon Wheelsets</p>
          </div>
          <div class="invoice-meta">
            <h1>采购发票</h1>
            <label>发票号<input data-field="invoiceNo" value="${invoice.no}" placeholder="草稿编号"></label>
            <label>日期<input data-field="invoiceDate" type="date" value="${invoice.date}"></label>
            <label>状态<select data-field="invoiceStatus"><option ${invoice.status === '草稿' ? 'selected' : ''}>草稿</option><option ${invoice.status === '已确认' ? 'selected' : ''}>已确认</option><option ${invoice.status === '已收货' ? 'selected' : ''}>已收货</option></select></label>
            <label>参考号<input data-field="invoiceRef" value="${invoice.ref}" placeholder="供应商单据号"></label>
          </div>
        </div>
        <div class="invoice-line"></div>
        <div class="invoice-parties">
          <section>
            <span class="invoice-label">供应商</span>
            <div class="supplier-select-row">
              <select data-field="invoiceSupplier"><option value="">选择供应商</option>${supplierOptions(invoice.supplier)}</select>
              <button class="btn icon-only" data-modal="supplier">${icons.edit}</button>
            </div>
            ${supplier.name ? `<strong>${supplier.name}</strong><p>${supplier.address || ''}</p><p>${supplier.contact || ''} ${supplier.phone || ''}</p>` : `<p class="muted">未选择供应商</p>`}
          </section>
          <section class="currency-box">
            <label>币种<select data-field="invoiceCurrency"><option ${invoice.currency === 'CNY' ? 'selected' : ''}>CNY</option><option ${invoice.currency === 'USD' ? 'selected' : ''}>USD</option><option ${invoice.currency === 'EUR' ? 'selected' : ''}>EUR</option></select></label>
            <label>1 ${invoice.currency} =<input data-field="invoiceRate" type="number" step="0.0001" value="${invoice.exchangeRate}"> CNY</label>
          </section>
        </div>
        <table class="invoice-items"><thead><tr><th>#</th><th>描述</th><th class="right">数量</th><th class="right">单价</th><th class="right">金额</th><th></th></tr></thead><tbody>
          ${invoice.items.map((item, index) => `<tr>
            <td>${index + 1}</td>
            <td><input data-invoice-desc="${index}" value="${item.description}"><code>${item.sku}</code></td>
            <td><input class="right" data-invoice-qty="${index}" type="number" min="1" value="${item.quantity}"></td>
            <td><input class="right" data-invoice-cost="${index}" type="number" min="0" step="0.01" value="${item.unitCost}"></td>
            <td class="right" data-invoice-amount="${index}">${money(item.quantity * item.unitCost, invoice.currency)}</td>
            <td><button class="icon-action" data-remove-invoice-item="${index}">${icons.trash}</button></td>
          </tr>`).join('') || `<tr><td colspan="6"><div class="empty">暂无明细，点击“添加项目”。</div></td></tr>`}
        </tbody></table>
        <button class="mini-btn dashed" data-modal="add-invoice-items">${icons.plus}添加项目</button>
        <div class="invoice-summary">
          <div></div>
          <div><strong>合计</strong><strong data-invoice-total>${money(total, invoice.currency)}</strong><span>折合 CNY</span><span data-invoice-base>${money(base, 'CNY')}</span></div>
        </div>
        <label class="invoice-notes"><span>备注</span><textarea data-field="invoiceNotes" placeholder="付款条款、备注...">${invoice.notes}</textarea></label>
        <footer>感谢您的合作 - Raceone Wheelsets</footer>
      </article>
    </div>
    <div class="invoice-actionbar">
      <button class="btn ghost" data-back-purchase-invoices>← 返回</button>
      <button class="btn danger-text" data-delete-purchase-invoice>${icons.trash}删除</button>
      <span></span>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
      <button class="btn" onclick="window.print()">${icons.receipt || icons.file}打印</button>
      <button class="btn success" data-generate-receipt>${icons.box}生成收货单</button>
      <button class="btn primary" data-save-purchase-invoice>${icons.save}保存</button>
    </div>
  `);
}

function renderGoodsReceipts() {
  const rows = goodsReceipts.filter(receipt => {
    const text = `${receipt.no} ${receipt.invoiceNo} ${receipt.supplier}`.toLowerCase();
    const matchesSearch = !tableSearch || text.includes(tableSearch.toLowerCase());
    const matchesStatus = !goodsReceiptStatusFilter || receipt.status === goodsReceiptStatusFilter;
    return matchesSearch && matchesStatus;
  });
  shell(`
    ${pageHead('收货单 (GRN)', '由采购发票生成 - 收货会把库存加入仓库', `
      <button class="btn" data-export="goods-receipts">${icons.download}Excel</button>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
    `)}
    <div class="toolbar">
      <div class="field">${icons.search}<input class="search" data-table-search placeholder="搜索 GRN / 发票 / 供应商" value="${tableSearch}"></div>
      <select class="select" data-grn-status-filter><option value="">全部状态</option><option ${goodsReceiptStatusFilter === '已收货' ? 'selected' : ''}>已收货</option></select>
    </div>
    <div class="table-card"><table><thead><tr><th>GRN 号</th><th>日期</th><th>采购发票</th><th>供应商</th><th>仓库</th><th>数量</th><th>状态</th><th class="right">操作</th></tr></thead><tbody>
      ${rows.map(receipt => {
        const index = goodsReceipts.indexOf(receipt);
        const totalQty = receipt.items.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
        return `<tr><td>${receipt.no}</td><td>${prettyDate(receipt.date)}</td><td>${receipt.invoiceNo}</td><td>${receipt.supplier || '-'}</td><td>${receipt.warehouse}</td><td>${totalQty}</td><td><span class="badge received">${receipt.status}</span></td><td><div class="inline-actions"><button class="link-action" data-open-grn="${index}">${icons.open}查看</button><button class="icon-action" data-delete-grn="${index}">${icons.trash}</button></div></td></tr>`;
      }).join('') || `<tr><td colspan="8"><div class="empty">暂无收货单。请从采购发票生成收货单。</div></td></tr>`}
    </tbody></table></div>
  `);
}

function renderCapital() {
  const rows = capitalEntries.filter(entry => {
    const text = `${entry.description} ${entry.method} ${entry.currency} ${entry.type}`.toLowerCase();
    const matchesSearch = !tableSearch || text.includes(tableSearch.toLowerCase());
    const matchesType = !capitalTypeFilter || entry.type === capitalTypeFilter;
    return matchesSearch && matchesType;
  });
  const totalInjection = capitalEntries.filter(entry => entry.type === '注入').reduce((sum, entry) => sum + entryBaseAmount(entry), 0);
  const totalAdjustment = capitalEntries.filter(entry => entry.type === '调整').reduce((sum, entry) => sum + entryBaseAmount(entry), 0);
  const netCapital = totalInjection + totalAdjustment;
  shell(`
    ${pageHead('资金注入', '记录股东投入、运营资金和资金调整，统一折算为 CNY', `
      <button class="btn" data-export="capital">${icons.download}Excel</button>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
      <button class="btn primary" data-modal="capital-entry">${icons.plus}新增记录</button>
    `)}
    <div class="cards finance-cards">
      <div class="metric"><span>净资金</span><strong>${money(netCapital, 'CNY')}</strong></div>
      <div class="metric"><span>资金注入</span><strong>${money(totalInjection, 'CNY')}</strong></div>
      <div class="metric"><span>资金调整</span><strong>${money(totalAdjustment, 'CNY')}</strong></div>
      <div class="metric"><span>记录数</span><strong>${capitalEntries.length}</strong></div>
    </div>
    <div class="toolbar">
      <div class="field">${icons.search}<input class="search" data-table-search placeholder="搜索描述 / 付款方式" value="${tableSearch}"></div>
      <select class="select" data-capital-type-filter><option value="">全部类型</option><option ${capitalTypeFilter === '注入' ? 'selected' : ''}>注入</option><option ${capitalTypeFilter === '调整' ? 'selected' : ''}>调整</option></select>
    </div>
    <div class="table-card"><table><thead><tr><th>日期</th><th>类型</th><th>币种</th><th class="right">原币金额</th><th>汇率</th><th>付款方式</th><th>描述</th><th class="right">本位币 (CNY)</th><th class="action-col">操作</th></tr></thead><tbody>
      ${rows.map(entry => {
        const index = capitalEntries.indexOf(entry);
        return `<tr><td>${prettyDate(entry.date)}</td><td><span class="badge active">${entry.type}</span></td><td>${entry.currency}</td><td class="right">${money(entry.amount, entry.currency)}</td><td>${entry.exchangeRate}</td><td>${entry.method || '-'}</td><td>${entry.description || '-'}</td><td class="right"><strong>${money(entryBaseAmount(entry), 'CNY')}</strong></td><td class="action-col"><div class="inline-actions"><button class="icon-action" data-edit-capital="${index}" title="编辑">${icons.edit}</button><button class="icon-action" data-delete-capital="${index}" title="删除">${icons.trash}</button></div></td></tr>`;
      }).join('') || `<tr><td colspan="9"><div class="empty">暂无资金记录</div></td></tr>`}
    </tbody></table></div>
  `);
}

function renderExpenses() {
  const rows = expenseEntries.filter(entry => {
    const text = `${entry.description} ${entry.category} ${entry.method} ${entry.linked}`.toLowerCase();
    const matchesSearch = !tableSearch || text.includes(tableSearch.toLowerCase());
    const matchesCategory = !expenseCategoryFilter || entry.category === expenseCategoryFilter;
    return matchesSearch && matchesCategory;
  });
  const totalExpenses = expenseEntries.reduce((sum, entry) => sum + entryBaseAmount(entry), 0);
  const thisMonth = expenseEntries
    .filter(entry => (entry.date || '').slice(0, 7) === '2026-06')
    .reduce((sum, entry) => sum + entryBaseAmount(entry), 0);
  const categoryTotals = expenseEntries.reduce((map, entry) => {
    map[entry.category] = (map[entry.category] || 0) + entryBaseAmount(entry);
    return map;
  }, {});
  const topCategory = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0] || ['-', 0];
  shell(`
    ${pageHead('费用支出', '记录业务费用，用于净利润估算', `
      <button class="btn" data-export="expenses">${icons.download}Excel</button>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
      <button class="btn primary" data-modal="expense-entry">${icons.plus}新增费用</button>
    `)}
    <div class="cards finance-cards">
      <div class="metric"><span>费用合计</span><strong>${money(totalExpenses, 'CNY')}</strong></div>
      <div class="metric"><span>本月费用</span><strong>${money(thisMonth, 'CNY')}</strong></div>
      <div class="metric"><span>最大类别</span><strong>${topCategory[0]}</strong><small>${money(topCategory[1], 'CNY')}</small></div>
    </div>
    <div class="toolbar">
      <div class="field">${icons.search}<input class="search" data-table-search placeholder="搜索描述 / 类别" value="${tableSearch}"></div>
      <select class="select" data-expense-category-filter>
        <option value="">全部类别</option>
        ${expenseCategories.map(category => `<option value="${category}" ${expenseCategoryFilter === category ? 'selected' : ''}>${category}</option>`).join('')}
      </select>
    </div>
    <div class="table-card"><table><thead><tr><th>日期</th><th>类别</th><th>描述</th><th>付款方式</th><th>关联</th><th class="right">金额</th><th class="right">本位币 (CNY)</th><th class="action-col">操作</th></tr></thead><tbody>
      ${rows.map(entry => {
        const index = expenseEntries.indexOf(entry);
        return `<tr><td>${prettyDate(entry.date)}</td><td><span class="badge neutral">${entry.category}</span></td><td>${entry.description || '-'}</td><td>${entry.method || '-'}</td><td>${entry.linked || '-'}</td><td class="right"><strong>${money(entry.amount, entry.currency)}</strong></td><td class="right">${money(entryBaseAmount(entry), 'CNY')}</td><td class="action-col"><div class="inline-actions"><button class="icon-action" data-edit-expense="${index}" title="编辑">${icons.edit}</button><button class="icon-action" data-delete-expense="${index}" title="删除">${icons.trash}</button></div></td></tr>`;
      }).join('') || `<tr><td colspan="8"><div class="empty">暂无费用记录</div></td></tr>`}
    </tbody></table></div>
  `);
}

function renderProfitLoss() {
  const data = profitLossData();
  const grossMargin = data.revenue ? (data.grossProfit / data.revenue) * 100 : 0;
  const netMargin = data.revenue ? (data.netProfit / data.revenue) * 100 : 0;
  const expenseRows = Object.entries(data.expensesByCategory).sort((a, b) => b[1] - a[1]);
  const maxTrend = Math.max(1, ...data.monthly.flatMap(item => [Math.abs(item.revenue), Math.abs(item.cogs), Math.abs(item.expenses), Math.abs(item.net)]));
  shell(`
    ${pageHead('利润表', '收入、销售成本、费用与净利润，统一以 CNY 展示', `
      <button class="btn" data-export="profit-loss">${icons.download}Excel</button>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
    `)}
    <div class="filter-card pl-filter">
      <label>开始日期<input type="date" data-pl-from value="${profitLossFrom}"></label>
      <label>结束日期<input type="date" data-pl-to value="${profitLossTo}"></label>
      <button class="btn" data-pl-this-year>今年</button>
      <button class="btn" data-pl-this-month>本月</button>
    </div>
    <div class="cards pl-cards">
      <div class="metric pl-metric revenue"><span>收入</span><strong>${money(data.revenue, 'CNY')}</strong><small>${salesInvoices.filter(invoice => dateInRange(invoice.date, profitLossFrom, profitLossTo) && ['已开票', '已付款'].includes(invoice.status)).length} 张销售发票</small></div>
      <div class="metric pl-metric cogs"><span>销售成本</span><strong>${money(data.cogs, 'CNY')}</strong></div>
      <div class="metric pl-metric gross"><span>毛利润</span><strong>${money(data.grossProfit, 'CNY')}</strong><small>${grossMargin.toFixed(1)}% 毛利率</small></div>
      <div class="metric pl-metric net"><span>净利润</span><strong class="${data.netProfit < 0 ? 'negative' : ''}">${data.netProfit < 0 ? '-' : ''}${money(Math.abs(data.netProfit), 'CNY')}</strong><small>${netMargin.toFixed(1)}% 净利率</small></div>
    </div>
    <div class="pl-grid">
      <section class="panel">
        <h2>损益表</h2>
        <div class="statement">
          <div class="statement-row strong"><span>收入</span>${statementMoney(data.revenue)}</div>
          <div class="statement-row muted-row"><span>销售成本</span><span>${data.cogs ? '-' : '-'}${money(data.cogs, 'CNY')}</span></div>
          <div class="statement-row strong border"><span>毛利润</span><span>${statementMoney(data.grossProfit)} <em>${grossMargin.toFixed(1)}%</em></span></div>
          <h3>经营费用</h3>
          ${expenseRows.map(([category, amount]) => `<div class="statement-row indent"><span>${category}</span><span class="negative">(${money(amount, 'CNY')})</span></div>`).join('') || '<div class="statement-row indent"><span>暂无费用</span><span>CNY 0.00</span></div>'}
          <div class="statement-row border"><span>经营费用合计</span><span class="negative">(${money(data.expenses, 'CNY')})</span></div>
          <div class="statement-row total"><span>净利润</span><span class="${data.netProfit < 0 ? 'negative' : ''}">${data.netProfit < 0 ? `(${money(Math.abs(data.netProfit), 'CNY')})` : money(data.netProfit, 'CNY')} <em>${netMargin.toFixed(1)}%</em></span></div>
        </div>
      </section>
      <section class="panel">
        <h2>月度趋势</h2>
        <div class="trend-chart">
          ${data.monthly.map(item => `
            <div class="trend-month">
              <div class="trend-bars">
                <span class="bar revenue" style="height:${trendHeight(item.revenue, maxTrend)}" title="收入 ${money(item.revenue, 'CNY')}"></span>
                <span class="bar cogs" style="height:${trendHeight(item.cogs, maxTrend)}" title="销售成本 ${money(item.cogs, 'CNY')}"></span>
                <span class="bar expense" style="height:${trendHeight(item.expenses, maxTrend)}" title="费用 ${money(item.expenses, 'CNY')}"></span>
                <span class="bar net ${item.net < 0 ? 'down' : ''}" style="height:${trendHeight(item.net, maxTrend)}" title="净利润 ${money(item.net, 'CNY')}"></span>
              </div>
              <small>${monthLabel(item.key)}</small>
            </div>
          `).join('')}
        </div>
        <div class="trend-legend"><span class="revenue"></span>收入 <span class="cogs"></span>销售成本 <span class="expense"></span>费用 <span class="net"></span>净利润</div>
      </section>
    </div>
    <p class="pl-note">收入将在销售发票模块接入后统计已签发或已付款发票；销售成本预留为按产品目录成本乘以销售数量计算。当前净利润已实时扣除费用支出明细中的记录。</p>
  `);
}

function renderCurrencies() {
  const rows = [...currencies].sort((a, b) => (a.base === b.base ? a.code.localeCompare(b.code) : a.base ? -1 : 1));
  shell(`
    ${pageHead('货币汇率', '汇率相对于本位币 CNY。1 单位外币 = 汇率 × CNY。', `
      <button class="btn" data-update-rates>${icons.download}自动更新汇率</button>
      <button class="btn primary" data-modal="currency-entry">${icons.plus}新增货币</button>
    `)}
    <div class="table-card"><table><thead><tr><th>代码</th><th>名称</th><th>符号</th><th class="right">汇率 → CNY</th><th>本位币</th><th>启用</th><th>更新时间</th><th class="action-col">操作</th></tr></thead><tbody>
      ${rows.map(currency => {
        const index = currencies.indexOf(currency);
        return `<tr><td><strong>${currency.code}</strong></td><td>${currency.name}</td><td>${currency.symbol}</td><td class="right">${currency.rate}</td><td>${currency.base ? '<span class="base-mark">★ 本位币</span>' : '-'}</td><td><span class="badge ${currency.active ? 'active' : 'cancelled'}">${currency.active ? '启用' : '禁用'}</span></td><td>${currency.updated || '-'}</td><td class="action-col"><div class="inline-actions"><button class="icon-action" data-edit-currency="${index}" title="编辑">${icons.edit}</button><button class="icon-action" data-delete-currency="${index}" title="删除" ${currency.base ? 'disabled' : ''}>${icons.trash}</button></div></td></tr>`;
      }).join('')}
    </tbody></table></div>
  `);
}

function renderUsers() {
  shell(`
    ${pageHead('用户管理', '角色：Admin · Sales · Warehouse · Finance', `
      <button class="btn primary" data-modal="user-entry">${icons.plus}新增用户</button>
    `)}
    <div class="table-card admin-table"><table><thead><tr><th>用户名</th><th>姓名</th><th>角色</th><th>状态</th><th>创建日期</th><th class="action-col">操作</th></tr></thead><tbody>
      ${users.map((user, index) => `<tr><td><strong>${user.username}</strong></td><td>${user.name}</td><td><span class="badge neutral">${user.role}</span></td><td><span class="badge ${user.status === '启用' ? 'active' : 'cancelled'}">${user.status}</span></td><td>${prettyDate(user.created)}</td><td class="action-col"><div class="inline-actions"><button class="icon-action" data-edit-user="${index}" title="编辑用户">${icons.edit}</button><button class="icon-action" data-reset-user="${index}" title="重置密码">${icons.key}</button><button class="icon-action" data-delete-user="${index}" title="删除用户" ${user.username === 'raceone' ? 'disabled' : ''}>${icons.trash}</button></div></td></tr>`).join('')}
    </tbody></table></div>
    <section class="panel role-panel">
      <div class="section-head">
        <div><h2>权限角色</h2><p>编辑角色后，关联用户会自动继承该角色权限。</p></div>
        <button class="btn" data-modal="role-entry">${icons.plus}新增角色</button>
      </div>
      <div class="role-grid">
        ${roles.map((role, index) => `
          <article class="role-card">
            <div class="role-card-head">
              <div><strong>${role.name}</strong><span>${role.description || '无说明'}</span></div>
              <div class="inline-actions"><button class="icon-action" data-edit-role="${index}" title="编辑角色">${icons.edit}</button><button class="icon-action" data-delete-role="${index}" title="删除角色" ${['Admin', 'Sales', 'Warehouse', 'Finance'].includes(role.name) ? 'disabled' : ''}>${icons.trash}</button></div>
            </div>
            <div class="permission-tags">${permissionModules.map(module => `<span class="${role.permissions.includes(module.key) ? 'on' : ''}">${module.label}</span>`).join('')}</div>
          </article>
        `).join('')}
      </div>
    </section>
  `);
}

function renderSettings() {
  const accountUser = currentUser();
  shell(`
    ${pageHead('系统设置', '基础资料与账户安全')}
    <div class="settings-tabs">
      <button class="${settingsTab === 'warehouses' ? 'active' : ''}" data-settings-tab="warehouses">${icons.box}仓库</button>
      <button class="${settingsTab === 'account' ? 'active' : ''}" data-settings-tab="account">${icons.key}我的账户</button>
    </div>
    ${settingsTab === 'warehouses' ? `
      <section class="panel settings-panel">
        <div class="section-head">
          <h2>仓库</h2>
          <button class="btn primary" data-modal="warehouse-entry">${icons.plus}新增</button>
        </div>
        <table><thead><tr><th>名称</th><th>位置</th><th class="action-col">操作</th></tr></thead><tbody>
          ${systemSettings.warehouses.map((warehouse, index) => `<tr><td>${warehouse.name}</td><td>${warehouse.location}</td><td class="action-col"><div class="inline-actions"><button class="icon-action" data-edit-warehouse="${index}" title="编辑">${icons.edit}</button><button class="icon-action" data-delete-warehouse="${index}" title="删除" ${systemSettings.warehouses.length === 1 ? 'disabled' : ''}>${icons.trash}</button></div></td></tr>`).join('')}
        </tbody></table>
      </section>
    ` : `
      <div class="account-grid">
        <section class="panel settings-panel account-card">
          <h2>账户</h2>
          <p>你的个人资料</p>
          <dl>
            <div><dt>用户名</dt><dd>${accountUser.username}</dd></div>
            <div><dt>姓名</dt><dd>${accountUser.name}</dd></div>
            <div><dt>角色</dt><dd>${accountUser.role}</dd></div>
          </dl>
        </section>
        <section class="panel settings-panel account-card">
          <h2>修改密码</h2>
          <p>更新你的登录密码</p>
          <div class="form-grid inline-form single-column">
            <label>当前密码 *<input data-field="currentPassword" type="password"></label>
            <label>新密码 *<input data-field="newPassword" type="password"></label>
            <label>确认新密码 *<input data-field="confirmPassword" type="password"></label>
            <button class="btn primary span-2" data-change-password>修改密码</button>
          </div>
        </section>
      </div>
    `}
  `);
}

function readCapitalForm() {
  return normalizeCapitalEntry({
    date: fieldValue('capitalDate', '2026-06-18'),
    type: fieldValue('capitalType', '注入'),
    currency: fieldValue('capitalCurrency', 'USD'),
    amount: fieldValue('capitalAmount', '0'),
    exchangeRate: fieldValue('capitalRate', '1'),
    method: fieldValue('capitalMethod'),
    description: document.querySelector('[data-field="capitalDescription"]')?.value || ''
  });
}

function readCurrencyForm() {
  const code = fieldValue('currencyCode').toUpperCase();
  const base = document.querySelector('[data-field="currencyBase"]')?.checked || code === 'CNY';
  return normalizeCurrency({
    code,
    symbol: fieldValue('currencySymbol', code),
    name: fieldValue('currencyName', code),
    rate: base ? 1 : fieldValue('currencyRate', '1'),
    base,
    active: document.querySelector('[data-field="currencyActive"]')?.checked !== false,
    updated: selectedCurrency >= 0 ? currencies[selectedCurrency]?.updated : ''
  });
}

function readUserForm(existing = {}) {
  return normalizeUser({
    username: fieldValue('userUsername', existing.username || ''),
    name: fieldValue('userName', ''),
    role: fieldValue('userRole', 'Sales'),
    status: fieldValue('userStatus', '启用'),
    created: existing.created || '2026-06-21'
  });
}

function userForm(user = {}) {
  const next = normalizeUser(user);
  const editing = Boolean(user.username);
  return `
    <div class="form-grid">
      <label>用户名 *<input data-field="userUsername" value="${next.username}" placeholder="例如：sales01" ${editing ? 'disabled' : ''}></label>
      <label>状态<select data-field="userStatus"><option ${next.status === '启用' ? 'selected' : ''}>启用</option><option ${next.status === '禁用' ? 'selected' : ''}>禁用</option></select></label>
      <label class="span-2">姓名<input data-field="userName" value="${next.name}" placeholder="完整姓名"></label>
      <label class="span-2">角色 *<select data-field="userRole">${roles.map(role => `<option value="${role.name}" ${next.role === role.name ? 'selected' : ''}>${role.name}</option>`).join('')}</select></label>
    </div>
  `;
}

function readRoleForm(existing = {}) {
  const permissions = [...document.querySelectorAll('[data-role-permission]:checked')].map(input => input.value);
  return normalizeRole({
    name: fieldValue('roleName', existing.name || ''),
    description: document.querySelector('[data-field="roleDescription"]')?.value || '',
    permissions
  });
}

function roleForm(role = {}) {
  const next = normalizeRole(role);
  const fixed = ['Admin', 'Sales', 'Warehouse', 'Finance'].includes(next.name);
  return `
    <div class="form-grid">
      <label class="span-2">角色名称 *<input data-field="roleName" value="${next.name}" placeholder="例如：Operations" ${fixed ? 'disabled' : ''}></label>
      <label class="span-2">说明<textarea data-field="roleDescription" placeholder="这个角色可以做什么">${next.description}</textarea></label>
      <div class="span-2 permission-editor">
        ${permissionModules.map(module => `<label class="check"><input data-role-permission value="${module.key}" type="checkbox" ${next.permissions.includes(module.key) ? 'checked' : ''}>${module.label}</label>`).join('')}
      </div>
    </div>
  `;
}

function readSystemSettings() {
  return normalizeSystemSettings({
    companyName: fieldValue('settingCompanyName', 'Raceone'),
    legalName: fieldValue('settingLegalName', 'Raceone Wheels'),
    defaultCurrency: fieldValue('settingDefaultCurrency', 'CNY'),
    timezone: fieldValue('settingTimezone', 'Asia/Shanghai'),
    dateFormat: fieldValue('settingDateFormat', 'YYYY/MM/DD'),
    defaultWarehouse: fieldValue('settingDefaultWarehouse', 'HQ'),
    lowStockThreshold: fieldValue('settingLowStockThreshold', '5'),
    requireStrongPassword: document.querySelector('[data-field="settingStrongPassword"]')?.checked !== false,
    allowAutoRateUpdate: document.querySelector('[data-field="settingAutoRate"]')?.checked !== false
  });
}

function readWarehouseForm() {
  return normalizeWarehouse({
    name: fieldValue('warehouseName', 'Main Warehouse'),
    location: fieldValue('warehouseLocation', 'HQ')
  });
}

function warehouseForm(warehouse = {}) {
  const next = normalizeWarehouse(warehouse);
  return `
    <div class="form-grid">
      <label class="span-2">名称 *<input data-field="warehouseName" value="${next.name}" placeholder="例如：Main Warehouse"></label>
      <label class="span-2">位置 *<input data-field="warehouseLocation" value="${next.location}" placeholder="例如：HQ"></label>
    </div>
  `;
}

function currencyForm(currency = {}) {
  const next = normalizeCurrency(currency);
  return `
    <div class="form-grid">
      <label>代码 *<input data-field="currencyCode" value="${next.code || ''}" placeholder="例如：EUR" ${next.base ? 'disabled' : ''}></label>
      <label>符号<input data-field="currencySymbol" value="${next.symbol || ''}" placeholder="例如：€"></label>
      <label class="span-2">名称 *<input data-field="currencyName" value="${next.name || ''}" placeholder="例如：Euro"></label>
      <label class="span-2">汇率 (1 单位 = ? CNY)<input data-field="currencyRate" type="number" min="0" step="0.0001" value="${next.rate || 1}" ${next.base ? 'disabled' : ''}></label>
      <label class="check span-2"><input data-field="currencyBase" type="checkbox" ${next.base ? 'checked' : ''}>设为本位币（汇率固定为 1）</label>
      <label class="check span-2"><input data-field="currencyActive" type="checkbox" ${next.active ? 'checked' : ''}>启用（可用于单据）</label>
    </div>
  `;
}

function readExpenseForm() {
  return normalizeExpenseEntry({
    date: fieldValue('expenseDate', '2026-06-18'),
    category: fieldValue('expenseCategory', '杂项'),
    currency: fieldValue('expenseCurrency', 'USD'),
    amount: fieldValue('expenseAmount', '0'),
    exchangeRate: fieldValue('expenseRate', '1'),
    method: fieldValue('expenseMethod'),
    linked: fieldValue('expenseLinked'),
    description: document.querySelector('[data-field="expenseDescription"]')?.value || ''
  });
}

function expenseForm(entry = {}) {
  const next = normalizeExpenseEntry(entry);
  const linkedOptions = [''].concat(purchaseOrderRows().map(row => row[0]));
  const selectedOrder = purchaseOrderByNo(next.linked);
  const existingIndex = expenseEntries.indexOf(entry);
  const used = next.linked ? linkedExpenseTotal(next.linked, existingIndex) : 0;
  const remaining = selectedOrder ? Math.max(selectedOrder.total - used, 0) : 0;
  return `
    <div class="form-grid">
      <label>日期 *<input data-field="expenseDate" type="date" value="${next.date}"></label>
      <label>类别 *<select data-field="expenseCategory" ${next.linked ? 'disabled' : ''}>${expenseCategories.map(category => `<option value="${category}" ${next.category === category ? 'selected' : ''}>${category}</option>`).join('')}</select></label>
      <label>币种<select data-field="expenseCurrency"><option value="USD" ${next.currency === 'USD' ? 'selected' : ''}>USD - US Dollar</option><option value="CNY" ${next.currency === 'CNY' ? 'selected' : ''}>CNY - Chinese Yuan</option><option value="EUR" ${next.currency === 'EUR' ? 'selected' : ''}>EUR - Euro</option></select></label>
      <label>金额 *<input data-field="expenseAmount" type="number" min="0" step="0.01" value="${next.amount || ''}" placeholder="0.00">${selectedOrder ? `<small class="form-hint">PO 总额 ${money(selectedOrder.total, 'CNY')}，可登记余额 ${money(remaining, 'CNY')}</small>` : ''}</label>
      <label>汇率 (1 原币 = ? CNY)<input data-field="expenseRate" type="number" min="0" step="0.0001" value="${next.exchangeRate || 1}"></label>
      <label>付款方式<select data-field="expenseMethod"><option value="">选择方式</option><option ${next.method === '现金' ? 'selected' : ''}>现金</option><option ${next.method === '银行' ? 'selected' : ''}>银行</option><option ${next.method === '在线转账' ? 'selected' : ''}>在线转账</option></select></label>
      <label>关联采购订单<select data-field="expenseLinked">${linkedOptions.map(value => `<option value="${value}" ${next.linked === value ? 'selected' : ''}>${value || '无'}</option>`).join('')}</select></label>
      <label class="span-2">描述<textarea data-field="expenseDescription" placeholder="费用用途、供应商或备注">${next.description || ''}</textarea></label>
    </div>
  `;
}

function applyExpensePurchaseOrderRules() {
  const linked = fieldValue('expenseLinked');
  const category = document.querySelector('[data-field="expenseCategory"]');
  if (!category) return;
  if (linked) {
    category.value = '采购支出';
    category.disabled = true;
  } else {
    category.disabled = false;
  }
}

function capitalForm(entry = {}) {
  const next = normalizeCapitalEntry(entry);
  return `
    <div class="form-grid">
      <label>日期 *<input data-field="capitalDate" type="date" value="${next.date}"></label>
      <label>类型 *<select data-field="capitalType"><option ${next.type === '注入' ? 'selected' : ''}>注入</option><option ${next.type === '调整' ? 'selected' : ''}>调整</option></select></label>
      <label>币种<select data-field="capitalCurrency"><option value="USD" ${next.currency === 'USD' ? 'selected' : ''}>USD - US Dollar</option><option value="CNY" ${next.currency === 'CNY' ? 'selected' : ''}>CNY - Chinese Yuan</option><option value="EUR" ${next.currency === 'EUR' ? 'selected' : ''}>EUR - Euro</option></select></label>
      <label>金额 *<input data-field="capitalAmount" type="number" min="0" step="0.01" value="${next.amount || ''}" placeholder="0.00"></label>
      <label>汇率 (1 原币 = ? CNY)<input data-field="capitalRate" type="number" min="0" step="0.0001" value="${next.exchangeRate || 1}"></label>
      <label>付款方式<select data-field="capitalMethod"><option value="">选择方式</option><option ${next.method === '现金' ? 'selected' : ''}>现金</option><option ${next.method === '银行' ? 'selected' : ''}>银行</option><option ${next.method === '在线转账' ? 'selected' : ''}>在线转账</option></select></label>
      <label class="span-2">描述<textarea data-field="capitalDescription" placeholder="资金来源、投资人或备注">${next.description || ''}</textarea></label>
    </div>
  `;
}

function goodsReceiptDetail(receipt) {
  const totalQty = receipt.items.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  return `
    <div class="grn-detail">
      <div class="grn-meta">
        <div><span>供应商</span><strong>${receipt.supplier || '-'}</strong></div>
        <div><span>采购发票</span><strong>${receipt.invoiceNo || '-'}</strong></div>
        <div><span>日期</span><strong>${prettyDate(receipt.date)}</strong></div>
        <div><span>状态</span><strong><span class="badge received">${receipt.status}</span></strong></div>
        <div><span>仓库</span><strong>${receipt.warehouse || 'HQ'}</strong></div>
        <div><span>合计数量</span><strong>${totalQty}</strong></div>
      </div>
      <h3>明细</h3>
      <table><thead><tr><th>SKU / 项目</th><th>批次</th><th class="right">数量</th></tr></thead><tbody>
        ${receipt.items.map(item => `<tr><td><strong>${item.description}</strong><code>${item.sku || '-'}</code></td><td>${item.batch || '-'}</td><td class="right">${item.quantity}</td></tr>`).join('')}
      </tbody></table>
      <p class="received-note">库存已入库 ✓</p>
    </div>
  `;
}

function renderInvoiceItemPicker() {
  const term = invoiceItemSearch.trim().toLowerCase();
  const productBlocks = products.map((product, productIndex) => {
    const rows = productVariants(product).map((variant, variantIndex) => ({
      product,
      productIndex,
      variant,
      variantIndex,
      text: `${product.name} ${product.sku} ${variant.sku} ${variantSpec(variant)}`
    })).filter(row => !term || row.text.toLowerCase().includes(term));
    if (!rows.length) return '';
    return `<section class="picker-group"><h3>${product.name} <span>${product.sku}</span></h3><div class="invoice-picker-grid">
      ${rows.map(row => `<label class="invoice-pick-card"><input type="checkbox" data-invoice-pick="${row.productIndex}:${row.variantIndex}"><span><strong>${variantSpec(row.variant)}</strong><code>${row.variant.sku}</code></span><em>${money(row.variant.cost || row.product.cost || 0, 'USD')}</em></label>`).join('')}
    </div></section>`;
  }).join('');
  return modalShell('添加项目', `
    <div class="invoice-picker">
      <div class="tabs"><button class="active">${icons.box}产品目录</button><button>${icons.plus}自定义项目</button></div>
      <div class="field wide-search">${icons.search}<input class="search" data-invoice-item-search placeholder="搜索产品 / SKU / 规格" value="${invoiceItemSearch}"></div>
      <div class="invoice-picker-list">${productBlocks || '<div class="empty">没有匹配的产品</div>'}</div>
    </div>
  `, '<span class="picker-count" data-picker-count>已选择 0 项</span><button class="btn" data-close>取消</button><button class="btn primary" data-add-selected-invoice-items>添加</button>');
}

function renderSalesItemPicker() {
  const term = salesItemSearch.trim().toLowerCase();
  const productBlocks = products.map((product, productIndex) => {
    const rows = productVariants(product).map((variant, variantIndex) => ({ product, productIndex, variant, variantIndex }))
      .filter(row => {
        const text = `${row.product.name} ${row.product.sku} ${row.variant.sku} ${variantSpec(row.variant)}`.toLowerCase();
        return !term || text.includes(term);
      });
    if (!rows.length) return '';
    return `<h3>${product.name} <span>${product.sku}</span></h3><div class="invoice-picker-grid">
      ${rows.map(row => `<label class="invoice-pick-card"><input type="checkbox" data-sales-pick="${row.productIndex}:${row.variantIndex}"><span><strong>${variantSpec(row.variant)}</strong><code>${row.variant.sku}</code></span><em>${money(row.variant.selling || row.product.price || 0, 'USD')}</em></label>`).join('')}
    </div>`;
  }).join('');
  return modalShell('添加项目', `
    <div class="invoice-picker">
      <div class="field invoice-picker-search">${icons.search}<input class="search" data-sales-item-search placeholder="搜索产品 / SKU / 规格" value="${salesItemSearch}"></div>
      <div class="invoice-picker-list">${productBlocks || '<div class="empty">没有匹配的产品</div>'}</div>
    </div>
  `, '<span data-sales-selected-count>0 selected</span><button class="btn" data-close>取消</button><button class="btn primary" data-add-sales-items>添加</button>');
}

function renderQuotationItemPicker() {
  const term = quotationItemSearch.trim().toLowerCase();
  const productBlocks = products.map((product, productIndex) => {
    const rows = productVariants(product).map((variant, variantIndex) => ({ product, productIndex, variant, variantIndex }))
      .filter(row => {
        const text = `${row.product.name} ${row.product.sku} ${row.variant.sku} ${variantSpec(row.variant)}`.toLowerCase();
        return !term || text.includes(term);
      });
    if (!rows.length) return '';
    return `<h3>${product.name} <span>${product.sku}</span></h3><div class="invoice-picker-grid">${rows.map(row => `<label class="invoice-pick-card"><input type="checkbox" data-quote-pick="${row.productIndex}:${row.variantIndex}"><span><strong>${variantSpec(row.variant)}</strong><code>${row.variant.sku}</code></span><em>${money(row.variant.selling || row.product.price || 0, 'USD')}</em></label>`).join('')}</div>`;
  }).join('');
  return modalShell('添加项目', `
    <div class="invoice-picker">
      <div class="field invoice-picker-search">${icons.search}<input class="search" data-quote-item-search placeholder="搜索产品 / SKU / 规格" value="${quotationItemSearch}"></div>
      <div class="invoice-picker-list">${productBlocks || '<div class="empty">没有匹配的产品</div>'}</div>
    </div>
  `, '<span data-quote-selected-count>0 selected</span><button class="btn" data-close>取消</button><button class="btn primary" data-add-quote-items>添加</button>');
}

function syncActiveInvoiceFromForm() {
  const invoice = activeInvoice();
  if (!invoice) return;
  invoice.no = fieldValue('invoiceNo', invoice.no);
  invoice.date = fieldValue('invoiceDate', invoice.date);
  invoice.status = fieldValue('invoiceStatus', invoice.status);
  invoice.ref = fieldValue('invoiceRef', invoice.ref);
  invoice.supplier = fieldValue('invoiceSupplier', invoice.supplier);
  invoice.currency = fieldValue('invoiceCurrency', invoice.currency);
  invoice.exchangeRate = Number(fieldValue('invoiceRate', invoice.exchangeRate)) || 1;
  invoice.notes = document.querySelector('[data-field="invoiceNotes"]')?.value || '';
  invoice.items.forEach((item, index) => {
    item.description = document.querySelector(`[data-invoice-desc="${index}"]`)?.value || item.description;
    item.quantity = Math.max(1, Number(document.querySelector(`[data-invoice-qty="${index}"]`)?.value || 1));
    item.unitCost = Math.max(0, Number(document.querySelector(`[data-invoice-cost="${index}"]`)?.value || 0));
  });
}

function syncActiveSalesInvoiceFromForm() {
  const invoice = activeSalesInvoice();
  if (!invoice) return;
  invoice.no = fieldValue('salesNo', invoice.no);
  invoice.date = fieldValue('salesDate', invoice.date);
  invoice.status = fieldValue('salesStatus', invoice.status);
  invoice.customer = fieldValue('salesCustomer', invoice.customer);
  invoice.currency = fieldValue('salesCurrency', invoice.currency);
  invoice.exchangeRate = Number(fieldValue('salesRate', invoice.exchangeRate)) || 1;
  invoice.notes = document.querySelector('[data-field="salesNotes"]')?.value || '';
  invoice.items.forEach((item, index) => {
    item.description = document.querySelector(`[data-sales-desc="${index}"]`)?.value || item.description;
    item.quantity = Number(document.querySelector(`[data-sales-qty="${index}"]`)?.value) || 1;
    item.unitPrice = Number(document.querySelector(`[data-sales-price="${index}"]`)?.value) || 0;
    item.unitCost = Number(document.querySelector(`[data-sales-cost="${index}"]`)?.value) || 0;
  });
}

function syncActiveQuotationFromForm() {
  const quote = activeQuotation();
  if (!quote) return;
  quote.no = fieldValue('quoteNo', quote.no);
  quote.date = fieldValue('quoteDate', quote.date);
  quote.status = fieldValue('quoteStatus', quote.status);
  quote.customer = fieldValue('quoteCustomer', quote.customer);
  quote.currency = fieldValue('quoteCurrency', quote.currency);
  quote.exchangeRate = Number(fieldValue('quoteRate', quote.exchangeRate)) || 1;
  quote.notes = document.querySelector('[data-field="quoteNotes"]')?.value || '';
  quote.items.forEach((item, index) => {
    item.description = document.querySelector(`[data-quote-desc="${index}"]`)?.value || item.description;
    item.quantity = Number(document.querySelector(`[data-quote-qty="${index}"]`)?.value) || 1;
    item.unitPrice = Number(document.querySelector(`[data-quote-price="${index}"]`)?.value) || 0;
  });
}

function refreshQuotationTotalsFromForm() {
  const quote = activeQuotation();
  if (!quote) return;
  syncActiveQuotationFromForm();
  quote.items.forEach((item, index) => {
    const amountCell = document.querySelector(`[data-quote-amount="${index}"]`);
    if (amountCell) amountCell.textContent = money(item.quantity * item.unitPrice, quote.currency);
  });
  const total = quotationTotal(quote);
  document.querySelector('[data-quote-total]') && (document.querySelector('[data-quote-total]').textContent = money(total, quote.currency));
  document.querySelector('[data-quote-base]') && (document.querySelector('[data-quote-base]').textContent = money(total * quote.exchangeRate, 'CNY'));
}

function refreshSalesTotalsFromForm() {
  const invoice = activeSalesInvoice();
  if (!invoice) return;
  syncActiveSalesInvoiceFromForm();
  invoice.items.forEach((item, index) => {
    const amountCell = document.querySelector(`[data-sales-amount="${index}"]`);
    if (amountCell) amountCell.textContent = money(item.quantity * item.unitPrice, invoice.currency);
  });
  const total = salesInvoiceTotal(invoice);
  const base = total * (Number(invoice.exchangeRate) || 1);
  document.querySelector('[data-sales-total]') && (document.querySelector('[data-sales-total]').textContent = money(total, invoice.currency));
  document.querySelector('[data-sales-base]') && (document.querySelector('[data-sales-base]').textContent = money(base, 'CNY'));
}

function refreshInvoiceTotalsFromForm() {
  syncActiveInvoiceFromForm();
  const invoice = activeInvoice();
  if (!invoice) return;
  invoice.items.forEach((item, index) => {
    const amountCell = document.querySelector(`[data-invoice-amount="${index}"]`);
    if (amountCell) amountCell.textContent = money(item.quantity * item.unitCost, invoice.currency);
  });
  const total = invoiceTotal(invoice);
  const base = total * (Number(invoice.exchangeRate) || 1);
  const totalCell = document.querySelector('[data-invoice-total]');
  const baseCell = document.querySelector('[data-invoice-base]');
  if (totalCell) totalCell.textContent = money(total, invoice.currency);
  if (baseCell) baseCell.textContent = money(base, 'CNY');
}

function invoiceItemFromSelection(productIndex, variantIndex) {
  const product = products[productIndex];
  const variant = productVariants(product)[variantIndex];
  return {
    description: `${product.name} · ${variantSpec(variant)}`,
    sku: variant.sku,
    quantity: 1,
    unitCost: Number(variant.cost || product.cost || 0)
  };
}

function renderSuppliers() {
  const rows = suppliers.filter(supplier => {
    const text = `${supplier.name} ${supplier.contact} ${supplier.email} ${supplier.phone}`.toLowerCase();
    const matchesSearch = !tableSearch || text.includes(tableSearch.toLowerCase());
    const matchesStatus = !supplierStatusFilter || supplier.status === supplierStatusFilter;
    return matchesSearch && matchesStatus;
  });
  shell(`
    ${pageHead('供应商', '供应商目录 - 联系人 - 付款条款 - 采购历史', `
      <button class="btn" data-export="suppliers">${icons.download}Excel</button>
      <button class="btn" onclick="window.print()">${icons.download}PDF</button>
      <button class="btn primary" data-modal="supplier">${icons.plus}新建供应商</button>
    `)}
    <div class="toolbar">
      <div class="field">${icons.search}<input class="search" data-table-search placeholder="搜索供应商 / 联系人" value="${tableSearch}"></div>
      <select class="select" data-supplier-status-filter><option value="">全部供应商</option><option ${supplierStatusFilter === '启用' ? 'selected' : ''}>启用</option><option ${supplierStatusFilter === '禁用' ? 'selected' : ''}>禁用</option></select>
    </div>
    <div class="table-card"><table><thead><tr><th>供应商</th><th>联系人</th><th>邮箱</th><th>电话</th><th>币种</th><th>付款条款</th><th>状态</th><th>操作</th></tr></thead><tbody>
      ${rows.map((supplier) => {
        const index = suppliers.indexOf(supplier);
        return `<tr><td>${supplier.name}</td><td>${supplier.contact}</td><td>${supplier.email}</td><td>${supplier.phone}</td><td>${supplier.currency}</td><td>${supplier.paymentTerms}</td><td>${supplier.status}</td><td><div class="inline-actions"><button class="link-action" data-open-supplier="${index}">${icons.open}打开</button><button class="icon-action" data-delete-supplier="${index}">${icons.trash}</button></div></td></tr>`;
      }).join('') || `<tr><td colspan="8"><div class="empty">暂无供应商</div></td></tr>`}
    </tbody></table></div>
  `);
}

function supplierForm(supplier = {}) {
  return `
    <div class="form-grid">
      <label>供应商 *<input data-field="supplierName" value="${supplier.name || ''}" placeholder="供应商公司名称"></label>
      <label>联系人<input data-field="supplierContact" value="${supplier.contact || ''}" placeholder="联系人"></label>
      <label>邮箱<input data-field="supplierEmail" value="${supplier.email || ''}" placeholder="name@example.com"></label>
      <label>电话<input data-field="supplierPhone" value="${supplier.phone || ''}" placeholder="+86"></label>
      <label>币种<select data-field="supplierCurrency"><option ${supplier.currency === 'CNY' ? 'selected' : ''}>CNY</option><option ${supplier.currency === 'USD' ? 'selected' : ''}>USD</option><option ${supplier.currency === 'EUR' ? 'selected' : ''}>EUR</option></select></label>
      <label>付款条款<input data-field="supplierPaymentTerms" value="${supplier.paymentTerms || ''}" placeholder="30 天账期"></label>
      <label>状态<select data-field="supplierStatus"><option ${supplier.status !== '禁用' ? 'selected' : ''}>启用</option><option ${supplier.status === '禁用' ? 'selected' : ''}>禁用</option></select></label>
      <label>税号<input data-field="supplierTaxId" value="${supplier.taxId || ''}" placeholder="Tax ID"></label>
      <label class="span-2">地址<input data-field="supplierAddress" value="${supplier.address || ''}" placeholder="供应商地址"></label>
      <label class="span-2">银行信息<input data-field="supplierBank" value="${supplier.bank || ''}" placeholder="开户行 / 账号"></label>
      <label class="span-2">备注<textarea data-field="supplierNotes">${supplier.notes || ''}</textarea></label>
    </div>
  `;
}

function customerForm(customer = {}) {
  const next = normalizeCustomer(customer);
  return `
    <div class="form-grid">
      <label class="span-2">客户名称 *<input data-field="customerName" value="${next.name}" placeholder="客户公司或姓名"></label>
      <label>联系人<input data-field="customerContact" value="${next.contact}"></label>
      <label>邮箱<input data-field="customerEmail" value="${next.email}"></label>
      <label>电话<input data-field="customerPhone" value="${next.phone}"></label>
      <label>币种<select data-field="customerCurrency">${currencies.filter(c => c.active).map(c => `<option value="${c.code}" ${next.currency === c.code ? 'selected' : ''}>${c.code}</option>`).join('')}</select></label>
      <label>状态<select data-field="customerStatus"><option ${next.status === '启用' ? 'selected' : ''}>启用</option><option ${next.status === '禁用' ? 'selected' : ''}>禁用</option></select></label>
      <label class="span-2">地址<textarea data-field="customerAddress">${next.address}</textarea></label>
      <label class="span-2">备注<textarea data-field="customerNotes">${next.notes}</textarea></label>
    </div>
  `;
}

function readCustomerForm() {
  return normalizeCustomer({
    name: fieldValue('customerName'),
    contact: fieldValue('customerContact'),
    email: fieldValue('customerEmail'),
    phone: fieldValue('customerPhone'),
    currency: fieldValue('customerCurrency', 'USD'),
    status: fieldValue('customerStatus', '启用'),
    address: document.querySelector('[data-field="customerAddress"]')?.value || '',
    notes: document.querySelector('[data-field="customerNotes"]')?.value || ''
  });
}

function readSupplierForm() {
  return normalizeSupplier({
    name: fieldValue('supplierName'),
    contact: fieldValue('supplierContact'),
    email: fieldValue('supplierEmail'),
    phone: fieldValue('supplierPhone'),
    currency: fieldValue('supplierCurrency', 'CNY'),
    paymentTerms: fieldValue('supplierPaymentTerms'),
    status: fieldValue('supplierStatus', '启用'),
    address: fieldValue('supplierAddress'),
    taxId: fieldValue('supplierTaxId'),
    bank: fieldValue('supplierBank'),
    notes: fieldValue('supplierNotes')
  });
}

function normalizeCustomer(customer) {
  const status = customer.status === '禁用' || customer.status === '绂佺敤' ? '禁用' : '启用';
  return {
    name: customer.name || '',
    contact: customer.contact || '',
    email: customer.email || '',
    phone: customer.phone || '',
    currency: customer.currency || 'USD',
    address: customer.address || '',
    taxId: customer.taxId || '',
    country: customer.country || '',
    shippingAddress: customer.shippingAddress || '',
    status,
    notes: customer.notes || ''
  };
}

function customerForm(customer = {}) {
  const next = normalizeCustomer(customer);
  return `
    <div class="form-grid">
      <label>客户名称 *<input data-field="customerName" value="${next.name}" placeholder="客户公司或姓名"></label>
      <label>联系人<input data-field="customerContact" value="${next.contact}"></label>
      <label>邮箱<input data-field="customerEmail" value="${next.email}"></label>
      <label>电话<input data-field="customerPhone" value="${next.phone}"></label>
      <label>税号 / 注册号<input data-field="customerTaxId" value="${next.taxId}"></label>
      <label>国家<input data-field="customerCountry" value="${next.country}"></label>
      <label>币种<select data-field="customerCurrency">${currencies.filter(c => c.active).map(c => `<option value="${c.code}" ${next.currency === c.code ? 'selected' : ''}>${c.code}</option>`).join('')}</select></label>
      <label>状态<select data-field="customerStatus"><option ${next.status === '启用' ? 'selected' : ''}>启用</option><option ${next.status === '禁用' ? 'selected' : ''}>禁用</option></select></label>
      <label>账单地址<textarea data-field="customerAddress">${next.address}</textarea></label>
      <label>收货地址<textarea data-field="customerShippingAddress">${next.shippingAddress}</textarea></label>
      <label class="check-row span-2"><input type="checkbox" data-field="customerActive" ${next.status === '启用' ? 'checked' : ''}> 启用</label>
    </div>
  `;
}

function readCustomerForm() {
  const active = document.querySelector('[data-field="customerActive"]')?.checked;
  return normalizeCustomer({
    name: fieldValue('customerName'),
    contact: fieldValue('customerContact'),
    email: fieldValue('customerEmail'),
    phone: fieldValue('customerPhone'),
    currency: fieldValue('customerCurrency', 'USD'),
    status: active === false ? '禁用' : fieldValue('customerStatus', '启用'),
    address: document.querySelector('[data-field="customerAddress"]')?.value || '',
    taxId: fieldValue('customerTaxId'),
    country: fieldValue('customerCountry'),
    shippingAddress: document.querySelector('[data-field="customerShippingAddress"]')?.value || '',
    notes: document.querySelector('[data-field="customerNotes"]')?.value || ''
  });
}

function renderSimplePage(cfg) {
  shell(`
    ${pageHead(cfg.title, cfg.subtitle, `<button class="btn" data-export="simple">${icons.download}Excel</button><button class="btn" onclick="window.print()">${icons.download}PDF</button><button class="btn primary" data-modal="simple">${icons.plus}${cfg.primary}</button>`)}
    <div class="toolbar"><div class="field">${icons.search}<input class="search" data-table-search placeholder="${cfg.search}" value="${tableSearch}"></div><select class="select"><option>${cfg.filter}</option></select></div>
    <div class="table-card"><table><thead><tr>${cfg.columns.map(col => `<th>${col}</th>`).join('')}</tr></thead><tbody>
      ${cfg.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}<td><div class="inline-actions"><button class="link-action">${icons.open}打开</button><button class="icon-action">${icons.trash}</button></div></td></tr>`).join('')}
    </tbody></table></div>
  `);
}

function qrSvg(text) {
  const modules = makeQrMatrix(String(text).slice(0, 17));
  const quiet = 4;
  const size = modules.length + quiet * 2;
  const cells = [];
  for (let y = 0; y < modules.length; y += 1) {
    for (let x = 0; x < modules.length; x += 1) {
      if (modules[y][x]) cells.push(`<rect x="${x + quiet}" y="${y + quiet}" width="1" height="1"/>`);
    }
  }
  return `<svg class="qr-code" viewBox="0 0 ${size} ${size}" role="img" aria-label="QR ${text}" shape-rendering="crispEdges"><rect width="${size}" height="${size}" fill="#fff"/>${cells.join('')}</svg>`;
}

function makeQrMatrix(text) {
  const size = 21;
  const modules = Array.from({ length: size }, () => Array(size).fill(false));
  const reserved = Array.from({ length: size }, () => Array(size).fill(false));
  const set = (x, y, dark, isReserved = true) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    modules[y][x] = dark;
    if (isReserved) reserved[y][x] = true;
  };
  const finder = (x, y) => {
    for (let dy = -1; dy <= 7; dy += 1) {
      for (let dx = -1; dx <= 7; dx += 1) {
        const xx = x + dx;
        const yy = y + dy;
        const dark = dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6 && (dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4));
        set(xx, yy, dark);
      }
    }
  };
  finder(0, 0);
  finder(size - 7, 0);
  finder(0, size - 7);
  for (let i = 8; i < size - 8; i += 1) {
    set(i, 6, i % 2 === 0);
    set(6, i, i % 2 === 0);
  }
  set(8, size - 8, true);
  reserveFormat(reserved);

  const data = qrDataCodewords(text);
  const ecc = reedSolomon(data, 7);
  const bits = [...data, ...ecc].flatMap(byte => Array.from({ length: 8 }, (_, i) => ((byte >>> (7 - i)) & 1) === 1));
  let bitIndex = 0;
  let upward = true;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right -= 1;
    for (let vert = 0; vert < size; vert += 1) {
      const y = upward ? size - 1 - vert : vert;
      for (let dx = 0; dx < 2; dx += 1) {
        const x = right - dx;
        if (reserved[y][x]) continue;
        const raw = bitIndex < bits.length ? bits[bitIndex] : false;
        const masked = raw !== ((x + y) % 2 === 0);
        modules[y][x] = masked;
        bitIndex += 1;
      }
    }
    upward = !upward;
  }
  drawFormat(modules, reserved, '111011111000100');
  return modules;
}

function reserveFormat(reserved) {
  const mark = (x, y) => {
    if (x >= 0 && y >= 0 && x < 21 && y < 21) reserved[y][x] = true;
  };
  for (let i = 0; i <= 8; i += 1) {
    mark(8, i);
    mark(i, 8);
  }
  for (let i = 0; i < 8; i += 1) {
    mark(20 - i, 8);
    mark(8, 20 - i);
  }
}

function drawFormat(modules, reserved, bits) {
  const set = (x, y, index) => {
    modules[y][x] = bits[index] === '1';
    reserved[y][x] = true;
  };
  const first = [[8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 7], [8, 8], [7, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [0, 8]];
  const second = [[20, 8], [19, 8], [18, 8], [17, 8], [16, 8], [15, 8], [14, 8], [13, 8], [8, 20], [8, 19], [8, 18], [8, 17], [8, 16], [8, 15], [8, 14]];
  first.forEach(([x, y], i) => set(x, y, i));
  second.forEach(([x, y], i) => set(x, y, i));
}

function qrDataCodewords(text) {
  const bytes = Array.from(new TextEncoder().encode(text));
  if (bytes.length > 17) throw new Error('QR Version 1-L 最多支持 17 字节');
  const bits = [];
  const push = (value, length) => {
    for (let i = length - 1; i >= 0; i -= 1) bits.push((value >>> i) & 1);
  };
  push(0b0100, 4);
  push(bytes.length, 8);
  bytes.forEach(byte => push(byte, 8));
  const maxBits = 19 * 8;
  for (let i = 0; i < 4 && bits.length < maxBits; i += 1) bits.push(0);
  while (bits.length % 8) bits.push(0);
  const codewords = [];
  for (let i = 0; i < bits.length; i += 8) codewords.push(bits.slice(i, i + 8).reduce((acc, bit) => (acc << 1) | bit, 0));
  for (let pad = 0; codewords.length < 19; pad += 1) codewords.push(pad % 2 === 0 ? 0xec : 0x11);
  return codewords;
}

function reedSolomon(data, degree) {
  const exp = Array(512).fill(0);
  const log = Array(256).fill(0);
  let value = 1;
  for (let i = 0; i < 255; i += 1) {
    exp[i] = value;
    log[value] = i;
    value <<= 1;
    if (value & 0x100) value ^= 0x11d;
  }
  for (let i = 255; i < 512; i += 1) exp[i] = exp[i - 255];
  const mul = (a, b) => (a === 0 || b === 0 ? 0 : exp[log[a] + log[b]]);
  let generator = [1];
  for (let i = 0; i < degree; i += 1) {
    const next = Array(generator.length + 1).fill(0);
    generator.forEach((coef, j) => {
      next[j] ^= mul(coef, exp[i]);
      next[j + 1] ^= coef;
    });
    generator = next;
  }
  const result = Array(degree).fill(0);
  data.forEach(byte => {
    const factor = byte ^ result.shift();
    result.push(0);
    generator.slice(1).forEach((coef, i) => {
      result[i] ^= mul(coef, factor);
    });
  });
  return result;
}

function renderModal() {
  if (modal === 'supplier') return modalShell('新建供应商', supplierForm(), '<button class="btn" data-close>取消</button><button class="btn primary" data-save-supplier>保存</button>');

  if (modal === 'supplier-detail') return modalShell('供应商详情', supplierForm(suppliers[selectedSupplier]), '<button class="btn" data-close>取消</button><button class="btn primary" data-update-supplier>保存</button>');

  if (modal === 'customer') return modalShell('新建客户', customerForm(), '<button class="btn" data-close>取消</button><button class="btn primary" data-save-customer>保存</button>');

  if (modal === 'customer-detail') return modalShell('客户详情', customerForm(customers[selectedCustomer]), '<button class="btn" data-close>取消</button><button class="btn primary" data-update-customer>保存</button>');

  if (modal === 'new-product') return modalShell('新建产品', `
    <div class="form-grid">
      <label>产品名称 *<input data-field="productName" placeholder="例如：Aire 40"></label>
      <label>SKU Code<input data-field="sku" placeholder="e.g. AIRE40"></label>
      <label>分类<input data-field="category" placeholder="例如：轮组"></label>
      <label>单位<input data-field="unit" value="pcs"></label>
      <label>基础售价 (USD)<input data-field="price" type="number" step="0.01"></label>
      <label>基础成本 (USD)<input data-field="cost" type="number" step="0.01"></label>
      <label>低库存阈值<input data-field="threshold" type="number" value="5"></label>
      <label class="span-2">描述<textarea data-field="description"></textarea></label>
      <label class="check"><input type="checkbox" checked>跟踪库存</label>
      <label class="check"><input type="checkbox" checked>启用</label>
    </div>`, '<button class="btn" data-close>取消</button><button class="btn primary" data-add-product>保存</button>');

  if (modal === 'stock-in' || modal === 'stock-out') {
    const out = modal === 'stock-out';
    const selection = stockSelection();
    return modalShell(out ? '出库' : '入库', `
      <div class="form-grid">
        <label class="span-2 selected-line">选择项目 *<input disabled value="${selection.product.name} - ${variantSpec(selection.variant)}"><button class="btn select-product" data-toggle-stock-picker>${icons.box}选择产品</button></label>
        ${stockPickerOpen ? renderStockPicker() : ''}
        <label>日期 *<input data-field="stockDate" type="date" value="2026-06-18"></label>
        <label>数量 *<input data-field="stockQty" type="number" min="1" value="1"></label>
        <label>仓库<select data-field="warehouse">${systemSettings.warehouses.map(warehouse => `<option value="${warehouse.location}" ${systemSettings.defaultWarehouse === warehouse.location ? 'selected' : ''}>${warehouse.location}</option>`).join('')}</select></label>
        <label>供应商批次<input data-field="batch" placeholder="批次 / lot no."></label>
        <label class="span-2">备注<textarea data-field="note"></textarea></label>
      </div>`, `<button class="btn" data-close>取消</button><button class="btn ${out ? 'danger' : 'success'}" data-stock-action>${out ? '移除库存' : '添加库存'}</button>`);
  }

  if (modal === 'generate-serials') {
    const selection = stockSelection();
    return modalShell('生成序列号', `
    <div class="form-grid">
      <label class="span-2 selected-line">选择产品 *<input disabled value="${selection.product.name} - ${variantSpec(selection.variant)}"><button class="btn" data-toggle-stock-picker>${icons.search}选择产品</button></label>
      ${stockPickerOpen ? renderStockPicker() : ''}
      <label>到货日期<input data-field="serialDate" type="date" value="2026-06-18"></label>
      <label>生成数量 *<input data-field="serialQty" type="number" min="1" value="1"></label>
      <p class="hint span-2">每套轮组都会获得唯一序列号，例如 RW-260618-0001。</p>
    </div>`, '<button class="btn" data-close>取消</button><button class="btn primary" data-generate>生成</button>');
  }

  if (modal === 'add-invoice-items') return renderInvoiceItemPicker();

  if (modal === 'add-sales-items') return renderSalesItemPicker();

  if (modal === 'add-quote-items') return renderQuotationItemPicker();

  if (modal === 'goods-receipt-detail') {
    const receipt = goodsReceipts[selectedGoodsReceipt];
    return modalShell(`收货单 ${receipt?.no || ''}`, receipt ? goodsReceiptDetail(receipt) : '<div class="empty">未找到收货单</div>', '<button class="btn" data-close>关闭</button>');
  }

  if (modal === 'capital-entry') return modalShell('新增资金记录', capitalForm(), '<button class="btn" data-close>取消</button><button class="btn primary" data-save-capital>保存</button>');

  if (modal === 'capital-edit') return modalShell('编辑资金记录', capitalForm(capitalEntries[selectedCapitalEntry]), '<button class="btn" data-close>取消</button><button class="btn primary" data-update-capital>保存</button>');

  if (modal === 'expense-entry') return modalShell('新增费用', expenseForm(), '<button class="btn" data-close>取消</button><button class="btn primary" data-save-expense>保存</button>');

  if (modal === 'expense-edit') return modalShell('编辑费用', expenseForm(expenseEntries[selectedExpenseEntry]), '<button class="btn" data-close>取消</button><button class="btn primary" data-update-expense>保存</button>');

  if (modal === 'currency-entry') return modalShell('新增货币', currencyForm(), '<button class="btn" data-close>取消</button><button class="btn primary" data-save-currency>保存</button>');

  if (modal === 'currency-edit') return modalShell('编辑货币', currencyForm(currencies[selectedCurrency]), '<button class="btn" data-close>取消</button><button class="btn primary" data-update-currency>保存</button>');

  if (modal === 'user-entry') return modalShell('新增用户', userForm(), '<button class="btn" data-close>取消</button><button class="btn primary" data-save-user>创建用户</button>');

  if (modal === 'user-edit') return modalShell(`编辑 ${users[selectedUser]?.username || ''}`, userForm(users[selectedUser]), '<button class="btn" data-close>取消</button><button class="btn primary" data-update-user>保存</button>');

  if (modal === 'role-entry') return modalShell('新增角色', roleForm(), '<button class="btn" data-close>取消</button><button class="btn primary" data-save-role>保存</button>');

  if (modal === 'role-edit') return modalShell(`编辑角色 ${roles[selectedRole]?.name || ''}`, roleForm(roles[selectedRole]), '<button class="btn" data-close>取消</button><button class="btn primary" data-update-role>保存</button>');

  if (modal === 'warehouse-entry') return modalShell('新增仓库', warehouseForm(), '<button class="btn" data-close>取消</button><button class="btn primary" data-save-warehouse>保存</button>');

  if (modal === 'warehouse-edit') return modalShell('编辑仓库', warehouseForm(systemSettings.warehouses[selectedWarehouse]), '<button class="btn" data-close>取消</button><button class="btn primary" data-update-warehouse>保存</button>');

  return modalShell('新建记录', '<div class="form-grid"><label>名称<input></label><label>状态<input></label></div>', '<button class="btn" data-close>取消</button><button class="btn primary" data-close>保存</button>');
}

function renderStockPicker() {
  const term = stockPickerSearch.trim().toLowerCase();
  const rows = products.flatMap((product, productIndex) => productVariants(product).map((variant, variantIndex) => ({
    product,
    productIndex,
    variant,
    variantIndex
  }))).filter(row => {
    const text = `${row.product.name} ${row.product.sku} ${row.variant.sku} ${variantSpec(row.variant)}`.toLowerCase();
    return !term || text.includes(term);
  });
  return `
    <div class="stock-picker span-2">
      <div class="field stock-picker-search">${icons.search}<input class="search" data-stock-picker-search placeholder="搜索产品 / SKU / 规格" value="${stockPickerSearch}"></div>
      <div class="stock-picker-list">
        ${rows.map(row => `
          <button class="stock-picker-row" data-pick-stock="${row.productIndex}:${row.variantIndex}">
            <strong>${row.product.name}</strong>
            <span>${row.variant.sku} · ${variantSpec(row.variant)}</span>
          </button>
        `).join('') || '<div class="empty">没有匹配的产品变体</div>'}
      </div>
    </div>
  `;
}

function modalShell(title, body, foot) {
  return `<div class="modal-backdrop"><div class="modal-card"><div class="modal-head"><h2>${title}</h2><button class="close" data-close>x</button></div>${body}<div class="modal-foot">${foot}</div></div></div>`;
}

function bindCommon() {
  document.querySelector('[data-logout]')?.addEventListener('click', () => {
    localStorage.removeItem(authKey);
    localStorage.setItem(logoutKey, '1');
    modal = null;
    loginError = '';
    renderLogin();
  });
  document.querySelectorAll('[data-modal]').forEach(btn => btn.addEventListener('click', () => {
    if (currentPage().startsWith('purchase-invoices/') && btn.dataset.modal === 'add-invoice-items') {
      syncActiveInvoiceFromForm();
    }
    if (currentPage().startsWith('sales-invoices/') && btn.dataset.modal === 'add-sales-items') {
      syncActiveSalesInvoiceFromForm();
    }
    if (currentPage().startsWith('quotations/') && btn.dataset.modal === 'add-quote-items') {
      syncActiveQuotationFromForm();
    }
    if (btn.dataset.modal === 'customer') {
      customerModalReturnPage = currentPage();
      customerModalTarget = currentPage().startsWith('sales-invoices/') ? 'sales' : currentPage().startsWith('quotations/') ? 'quote' : '';
      if (customerModalTarget === 'sales') syncActiveSalesInvoiceFromForm();
      if (customerModalTarget === 'quote') syncActiveQuotationFromForm();
    }
    modal = btn.dataset.modal;
    stockProductIndex = selectedProduct;
    stockVariantIndex = 0;
    stockPickerOpen = false;
    stockPickerSearch = '';
    route(currentPage());
  }));
  document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => { modal = null; stockPickerOpen = false; customerPickerOpen = ''; route(currentPage()); }));
  document.querySelectorAll('[data-toggle-customer-picker]').forEach(btn => btn.addEventListener('click', event => {
    const kind = event.currentTarget.dataset.toggleCustomerPicker;
    if (kind === 'sales') syncActiveSalesInvoiceFromForm();
    if (kind === 'quote') syncActiveQuotationFromForm();
    customerPickerOpen = customerPickerOpen === kind ? '' : kind;
    customerPickerSearch = '';
    route(currentPage());
  }));
  document.querySelector('[data-customer-picker-search]')?.addEventListener('input', event => {
    customerPickerSearch = event.target.value;
    renderSoon();
  });
  document.querySelectorAll('[data-pick-customer]').forEach(btn => btn.addEventListener('click', event => {
    const [kind, rawIndex] = event.currentTarget.dataset.pickCustomer.split(':');
    const customer = customers[Number(rawIndex)];
    if (!customer) return;
    if (kind === 'sales') {
      const invoice = activeSalesInvoice();
      syncActiveSalesInvoiceFromForm();
      invoice.customer = customer.name;
      invoice.currency = customer.currency || invoice.currency;
      invoice.exchangeRate = currencyRate(invoice.currency);
    }
    if (kind === 'quote') {
      const quote = activeQuotation();
      syncActiveQuotationFromForm();
      quote.customer = customer.name;
      quote.currency = customer.currency || quote.currency;
      quote.exchangeRate = currencyRate(quote.currency);
    }
    customerPickerOpen = '';
    customerPickerSearch = '';
    route(currentPage());
  }));
  document.querySelectorAll('[data-new-inline-customer]').forEach(btn => btn.addEventListener('click', event => {
    const kind = event.currentTarget.dataset.newInlineCustomer;
    customerModalTarget = kind;
    customerModalReturnPage = currentPage();
    if (kind === 'sales') syncActiveSalesInvoiceFromForm();
    if (kind === 'quote') syncActiveQuotationFromForm();
    customerPickerOpen = '';
    customerPickerSearch = '';
    modal = 'customer';
    route(currentPage());
  }));
  document.querySelectorAll('[data-select-product]').forEach(btn => btn.addEventListener('click', () => {
    selectedProduct = Number(btn.dataset.selectProduct);
    saveState();
    route('products');
  }));
  document.querySelector('[data-product-search]')?.addEventListener('input', event => { productSearch = event.target.value; renderSoon(); });
  document.querySelector('[data-table-search]')?.addEventListener('input', event => { tableSearch = event.target.value; renderSoon(); });
  document.querySelector('[data-supplier-status-filter]')?.addEventListener('change', event => {
    supplierStatusFilter = event.target.value;
    renderSoon();
  });
  document.querySelector('[data-customer-status-filter]')?.addEventListener('change', event => {
    customerStatusFilter = event.target.value;
    renderSoon();
  });
  document.querySelector('[data-sales-status-filter]')?.addEventListener('change', event => {
    salesInvoiceStatusFilter = event.target.value;
    renderSoon();
  });
  document.querySelector('[data-quotation-status-filter]')?.addEventListener('change', event => {
    quotationStatusFilter = event.target.value;
    renderSoon();
  });
  document.querySelector('[data-delivery-status-filter]')?.addEventListener('change', event => {
    deliveryOrderStatusFilter = event.target.value;
    renderSoon();
  });
  document.querySelector('[data-purchase-status-filter]')?.addEventListener('change', event => {
    purchaseInvoiceStatusFilter = event.target.value;
    renderSoon();
  });
  document.querySelector('[data-grn-status-filter]')?.addEventListener('change', event => {
    goodsReceiptStatusFilter = event.target.value;
    renderSoon();
  });
  document.querySelector('[data-capital-type-filter]')?.addEventListener('change', event => {
    capitalTypeFilter = event.target.value;
    renderSoon();
  });
  document.querySelector('[data-expense-category-filter]')?.addEventListener('change', event => {
    expenseCategoryFilter = event.target.value;
    renderSoon();
  });
  document.querySelector('[data-pl-from]')?.addEventListener('change', event => {
    profitLossFrom = event.target.value || profitLossFrom;
    renderSoon();
  });
  document.querySelector('[data-pl-to]')?.addEventListener('change', event => {
    profitLossTo = event.target.value || profitLossTo;
    renderSoon();
  });
  document.querySelector('[data-pl-this-year]')?.addEventListener('click', () => {
    profitLossFrom = '2026-01-01';
    profitLossTo = '2026-06-20';
    route('profit-loss');
  });
  document.querySelector('[data-pl-this-month]')?.addEventListener('click', () => {
    profitLossFrom = '2026-06-01';
    profitLossTo = '2026-06-20';
    route('profit-loss');
  });
  document.querySelector('[data-field="expenseLinked"]')?.addEventListener('change', applyExpensePurchaseOrderRules);
  document.querySelector('[data-save-capital]')?.addEventListener('click', async event => {
    const entry = readCapitalForm();
    if (!entry.amount) {
      document.querySelector('[data-field="capitalAmount"]')?.focus();
      return;
    }
    event.currentTarget.disabled = true;
    capitalEntries.unshift(entry);
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '资金记录已保存' : '保存失败，请检查本地服务';
    route('capital');
  });
  document.querySelectorAll('[data-edit-capital]').forEach(button => button.addEventListener('click', event => {
    selectedCapitalEntry = Number(event.currentTarget.dataset.editCapital);
    modal = 'capital-edit';
    route('capital');
  }));
  document.querySelector('[data-update-capital]')?.addEventListener('click', async event => {
    const entry = readCapitalForm();
    if (!entry.amount) {
      document.querySelector('[data-field="capitalAmount"]')?.focus();
      return;
    }
    event.currentTarget.disabled = true;
    capitalEntries[selectedCapitalEntry] = entry;
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '资金记录已更新' : '保存失败，请检查本地服务';
    route('capital');
  });
  document.querySelectorAll('[data-delete-capital]').forEach(button => button.addEventListener('click', event => {
    capitalEntries.splice(Number(event.currentTarget.dataset.deleteCapital), 1);
    saveState();
    route('capital');
  }));
  document.querySelector('[data-save-expense]')?.addEventListener('click', async event => {
    const entry = readExpenseForm();
    const validation = validateExpenseEntry(entry);
    if (!validation.ok) {
      window.alert(validation.message);
      document.querySelector(`[data-field="${validation.field}"]`)?.focus();
      return;
    }
    event.currentTarget.disabled = true;
    expenseEntries.unshift(entry);
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '费用记录已保存' : '保存失败，请检查本地服务';
    route('expenses');
  });
  document.querySelectorAll('[data-edit-expense]').forEach(button => button.addEventListener('click', event => {
    selectedExpenseEntry = Number(event.currentTarget.dataset.editExpense);
    modal = 'expense-edit';
    route('expenses');
  }));
  document.querySelector('[data-update-expense]')?.addEventListener('click', async event => {
    const entry = readExpenseForm();
    const validation = validateExpenseEntry(entry, selectedExpenseEntry);
    if (!validation.ok) {
      window.alert(validation.message);
      document.querySelector(`[data-field="${validation.field}"]`)?.focus();
      return;
    }
    event.currentTarget.disabled = true;
    expenseEntries[selectedExpenseEntry] = entry;
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '费用记录已更新' : '保存失败，请检查本地服务';
    route('expenses');
  });
  document.querySelectorAll('[data-delete-expense]').forEach(button => button.addEventListener('click', event => {
    expenseEntries.splice(Number(event.currentTarget.dataset.deleteExpense), 1);
    saveState();
    route('expenses');
  }));
  document.querySelector('[data-save-currency]')?.addEventListener('click', async event => {
    const currency = readCurrencyForm();
    if (!currency.code || currencies.some(item => item.code === currency.code)) {
      window.alert('请输入未重复的货币代码');
      document.querySelector('[data-field="currencyCode"]')?.focus();
      return;
    }
    if (currency.base) currencies = currencies.map(item => ({ ...item, base: false }));
    currency.base = currency.code === 'CNY' || currency.base;
    currency.rate = currency.base ? 1 : currency.rate;
    currency.updated = currentDateTimeLabel();
    event.currentTarget.disabled = true;
    currencies.push(currency);
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '货币已保存' : '保存失败，请检查本地服务';
    route('currencies');
  });
  document.querySelectorAll('[data-edit-currency]').forEach(button => button.addEventListener('click', event => {
    selectedCurrency = Number(event.currentTarget.dataset.editCurrency);
    modal = 'currency-edit';
    route('currencies');
  }));
  document.querySelector('[data-update-currency]')?.addEventListener('click', async event => {
    const currency = readCurrencyForm();
    const duplicate = currencies.some((item, index) => index !== selectedCurrency && item.code === currency.code);
    if (!currency.code || duplicate) {
      window.alert('请输入未重复的货币代码');
      document.querySelector('[data-field="currencyCode"]')?.focus();
      return;
    }
    if (currency.base) currencies = currencies.map(item => ({ ...item, base: false }));
    currency.base = currency.code === 'CNY' || currency.base;
    currency.rate = currency.base ? 1 : currency.rate;
    currency.updated = currentDateTimeLabel();
    event.currentTarget.disabled = true;
    currencies[selectedCurrency] = currency;
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '货币已更新' : '保存失败，请检查本地服务';
    route('currencies');
  });
  document.querySelectorAll('[data-delete-currency]').forEach(button => button.addEventListener('click', event => {
    const index = Number(event.currentTarget.dataset.deleteCurrency);
    if (currencies[index]?.base) return;
    currencies.splice(index, 1);
    saveState();
    route('currencies');
  }));
  document.querySelector('[data-update-rates]')?.addEventListener('click', async event => {
    event.currentTarget.disabled = true;
    event.currentTarget.innerHTML = `${icons.download}更新中`;
    try {
      const response = await fetch('/api/currencies/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currencies })
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || '更新失败');
      currencies = result.currencies.map(normalizeCurrency);
      localStorage.setItem(storageKey, JSON.stringify({ products, serials, transactions, suppliers, customers, quotations, purchaseInvoices, salesInvoices, deliveryOrders, goodsReceipts, capitalEntries, expenseEntries, currencies, users, roles, systemSettings, selectedProduct }));
      flashMessage = `汇率已自动更新：${result.updated}`;
    } catch (error) {
      flashMessage = `自动更新失败：${error.message || '请检查网络'}`;
    }
    route('currencies');
  });
  document.querySelector('[data-save-user]')?.addEventListener('click', async event => {
    const user = readUserForm();
    if (!user.username || users.some(item => item.username.toLowerCase() === user.username.toLowerCase())) {
      window.alert('请输入未重复的用户名');
      document.querySelector('[data-field="userUsername"]')?.focus();
      return;
    }
    event.currentTarget.disabled = true;
    users.push(user);
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '用户已创建' : '保存失败，请检查本地服务';
    route('users');
  });
  document.querySelectorAll('[data-edit-user]').forEach(button => button.addEventListener('click', event => {
    selectedUser = Number(event.currentTarget.dataset.editUser);
    modal = 'user-edit';
    route('users');
  }));
  document.querySelector('[data-update-user]')?.addEventListener('click', async event => {
    const user = readUserForm(users[selectedUser]);
    event.currentTarget.disabled = true;
    users[selectedUser] = user;
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '用户已更新' : '保存失败，请检查本地服务';
    route('users');
  });
  document.querySelectorAll('[data-delete-user]').forEach(button => button.addEventListener('click', event => {
    const index = Number(event.currentTarget.dataset.deleteUser);
    if (users[index]?.username === 'raceone') return;
    users.splice(index, 1);
    saveState();
    route('users');
  }));
  document.querySelectorAll('[data-reset-user]').forEach(button => button.addEventListener('click', event => {
    const user = users[Number(event.currentTarget.dataset.resetUser)];
    flashMessage = `${user.username} 的密码已重置为 123456`;
    route('users');
  }));
  document.querySelector('[data-save-role]')?.addEventListener('click', async event => {
    const role = readRoleForm();
    if (!role.name || roles.some(item => item.name.toLowerCase() === role.name.toLowerCase())) {
      window.alert('请输入未重复的角色名称');
      document.querySelector('[data-field="roleName"]')?.focus();
      return;
    }
    event.currentTarget.disabled = true;
    roles.push(role);
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '角色已保存' : '保存失败，请检查本地服务';
    route('users');
  });
  document.querySelectorAll('[data-edit-role]').forEach(button => button.addEventListener('click', event => {
    selectedRole = Number(event.currentTarget.dataset.editRole);
    modal = 'role-edit';
    route('users');
  }));
  document.querySelector('[data-update-role]')?.addEventListener('click', async event => {
    const existing = roles[selectedRole];
    const role = readRoleForm(existing);
    const duplicate = roles.some((item, index) => index !== selectedRole && item.name.toLowerCase() === role.name.toLowerCase());
    if (!role.name || duplicate) {
      window.alert('请输入未重复的角色名称');
      document.querySelector('[data-field="roleName"]')?.focus();
      return;
    }
    event.currentTarget.disabled = true;
    roles[selectedRole] = role;
    users = users.map(user => user.role === existing.name ? { ...user, role: role.name } : user);
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '角色权限已更新' : '保存失败，请检查本地服务';
    route('users');
  });
  document.querySelectorAll('[data-delete-role]').forEach(button => button.addEventListener('click', event => {
    const index = Number(event.currentTarget.dataset.deleteRole);
    const role = roles[index];
    if (['Admin', 'Sales', 'Warehouse', 'Finance'].includes(role.name) || users.some(user => user.role === role.name)) {
      window.alert('系统角色或已有用户使用的角色不能删除');
      return;
    }
    roles.splice(index, 1);
    saveState();
    route('users');
  }));
  document.querySelector('[data-save-settings]')?.addEventListener('click', async event => {
    systemSettings = readSystemSettings();
    event.currentTarget.disabled = true;
    const response = await saveState();
    flashMessage = response?.ok ? '系统设置已保存' : '保存失败，请检查本地服务';
    route('settings');
  });
  document.querySelectorAll('[data-settings-tab]').forEach(button => button.addEventListener('click', event => {
    settingsTab = event.currentTarget.dataset.settingsTab;
    route('settings');
  }));
  document.querySelector('[data-save-warehouse]')?.addEventListener('click', async event => {
    const warehouse = readWarehouseForm();
    if (systemSettings.warehouses.some(item => item.location.toLowerCase() === warehouse.location.toLowerCase())) {
      window.alert('仓库位置不能重复');
      document.querySelector('[data-field="warehouseLocation"]')?.focus();
      return;
    }
    event.currentTarget.disabled = true;
    systemSettings.warehouses.push(warehouse);
    systemSettings.defaultWarehouse = systemSettings.defaultWarehouse || warehouse.location;
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '仓库已保存' : '保存失败，请检查本地服务';
    route('settings');
  });
  document.querySelectorAll('[data-edit-warehouse]').forEach(button => button.addEventListener('click', event => {
    selectedWarehouse = Number(event.currentTarget.dataset.editWarehouse);
    modal = 'warehouse-edit';
    route('settings');
  }));
  document.querySelector('[data-update-warehouse]')?.addEventListener('click', async event => {
    const warehouse = readWarehouseForm();
    const duplicate = systemSettings.warehouses.some((item, index) => index !== selectedWarehouse && item.location.toLowerCase() === warehouse.location.toLowerCase());
    if (duplicate) {
      window.alert('仓库位置不能重复');
      document.querySelector('[data-field="warehouseLocation"]')?.focus();
      return;
    }
    const oldLocation = systemSettings.warehouses[selectedWarehouse]?.location;
    event.currentTarget.disabled = true;
    systemSettings.warehouses[selectedWarehouse] = warehouse;
    if (systemSettings.defaultWarehouse === oldLocation) systemSettings.defaultWarehouse = warehouse.location;
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '仓库已更新' : '保存失败，请检查本地服务';
    route('settings');
  });
  document.querySelectorAll('[data-delete-warehouse]').forEach(button => button.addEventListener('click', event => {
    const index = Number(event.currentTarget.dataset.deleteWarehouse);
    if (systemSettings.warehouses.length === 1) return;
    const removed = systemSettings.warehouses.splice(index, 1)[0];
    if (systemSettings.defaultWarehouse === removed.location) systemSettings.defaultWarehouse = systemSettings.warehouses[0]?.location || 'HQ';
    saveState();
    route('settings');
  }));
  document.querySelector('[data-change-password]')?.addEventListener('click', () => {
    const current = fieldValue('currentPassword');
    const next = fieldValue('newPassword');
    const confirm = fieldValue('confirmPassword');
    if (!current || !next || !confirm) {
      window.alert('请填写当前密码、新密码和确认密码');
      return;
    }
    if (next !== confirm) {
      window.alert('两次输入的新密码不一致');
      return;
    }
    flashMessage = '密码已更新';
    route('settings');
  });
  document.querySelector('[data-new-sales-invoice]')?.addEventListener('click', () => {
    const nextNumber = salesInvoices.length + 1;
    const customer = customers[0];
    salesInvoices.unshift(normalizeSalesInvoice({
      no: `SINV-${compactDate('2026-06-21')}-${String(nextNumber).padStart(4, '0')}`,
      date: '2026-06-21',
      status: '草稿',
      customer: customer?.name || '',
      currency: customer?.currency || 'USD',
      exchangeRate: currencyRate(customer?.currency || 'USD'),
      items: []
    }));
    selectedSalesInvoice = 0;
    saveState();
    location.hash = '#/sales-invoices/0';
  });
  document.querySelector('[data-new-quotation]')?.addEventListener('click', () => {
    const nextNumber = quotations.length + 1;
    const customer = customers[0];
    quotations.unshift(normalizeQuotation({
      no: `QUO-${compactDate('2026-06-21')}-${String(nextNumber).padStart(4, '0')}`,
      date: '2026-06-21',
      status: '草稿',
      customer: customer?.name || '',
      currency: customer?.currency || 'USD',
      exchangeRate: currencyRate(customer?.currency || 'USD'),
      items: []
    }));
    selectedQuotation = 0;
    saveState();
    location.hash = '#/quotations/0';
  });
  document.querySelectorAll('[data-open-quotation]').forEach(button => button.addEventListener('click', event => {
    selectedQuotation = Number(event.currentTarget.dataset.openQuotation);
    location.hash = `#/quotations/${selectedQuotation}`;
  }));
  document.querySelector('[data-back-quotations]')?.addEventListener('click', () => {
    syncActiveQuotationFromForm();
    saveState();
    location.hash = '#/quotations';
  });
  document.querySelector('[data-save-quotation]')?.addEventListener('click', async event => {
    event.currentTarget.disabled = true;
    syncActiveQuotationFromForm();
    const response = await saveState();
    flashMessage = response?.ok ? '报价单已保存' : '保存失败，请检查本地服务';
    route(`quotations/${selectedQuotation}`);
  });
  document.querySelector('[data-delete-quotation]')?.addEventListener('click', () => {
    quotations.splice(selectedQuotation, 1);
    selectedQuotation = 0;
    saveState();
    location.hash = '#/quotations';
  });
  document.querySelectorAll('[data-remove-quote-item]').forEach(button => button.addEventListener('click', event => {
    syncActiveQuotationFromForm();
    activeQuotation().items.splice(Number(event.currentTarget.dataset.removeQuoteItem), 1);
    saveState();
    route(`quotations/${selectedQuotation}`);
  }));
  document.querySelectorAll('[data-quote-qty], [data-quote-price], [data-field="quoteRate"]').forEach(input => input.addEventListener('input', refreshQuotationTotalsFromForm));
  document.querySelector('[data-field="quoteCurrency"]')?.addEventListener('change', event => {
    const quote = activeQuotation();
    quote.currency = event.target.value;
    quote.exchangeRate = currencyRate(quote.currency);
    route(`quotations/${selectedQuotation}`);
  });
  document.querySelector('[data-quote-item-search]')?.addEventListener('input', event => { quotationItemSearch = event.target.value; renderSoon(); });
  document.querySelectorAll('[data-quote-pick]').forEach(input => input.addEventListener('change', () => {
    const count = document.querySelectorAll('[data-quote-pick]:checked').length;
    const label = document.querySelector('[data-quote-selected-count]');
    if (label) label.textContent = `${count} selected`;
  }));
  document.querySelector('[data-add-quote-items]')?.addEventListener('click', () => {
    const quote = activeQuotation();
    document.querySelectorAll('[data-quote-pick]:checked').forEach(input => {
      const [productIndex, variantIndex] = input.dataset.quotePick.split(':').map(Number);
      const product = products[productIndex];
      const variant = productVariants(product)[variantIndex];
      quote.items.push({
        description: `${product.name} · ${variantSpec(variant)}`,
        sku: variant.sku,
        quantity: 1,
        unitPrice: Number(variant.selling || product.price || 0)
      });
    });
    modal = null;
    quotationItemSearch = '';
    saveState();
    route(`quotations/${selectedQuotation}`);
  });
  document.querySelector('[data-convert-quote]')?.addEventListener('click', async () => {
    syncActiveQuotationFromForm();
    const quote = activeQuotation();
    if (!quote.items.length) {
      window.alert('请先添加报价项目');
      return;
    }
    quote.status = '已接受';
    const nextNumber = salesInvoices.length + 1;
    salesInvoices.unshift(normalizeSalesInvoice({
      no: `SINV-${compactDate('2026-06-21')}-${String(nextNumber).padStart(4, '0')}`,
      date: quote.date,
      status: '草稿',
      customer: quote.customer,
      currency: quote.currency,
      exchangeRate: quote.exchangeRate,
      notes: quote.notes,
      items: quote.items.map(item => {
        const variant = products.flatMap(product => productVariants(product)).find(v => v.sku === item.sku) || {};
        return { ...item, unitCost: Number(variant.cost || 0), unitPrice: item.unitPrice };
      })
    }));
    selectedSalesInvoice = 0;
    const response = await saveState();
    flashMessage = response?.ok ? '已转换为销售发票' : '保存失败，请检查本地服务';
    location.hash = '#/sales-invoices/0';
  });
  document.querySelectorAll('[data-open-sales-invoice]').forEach(button => button.addEventListener('click', event => {
    selectedSalesInvoice = Number(event.currentTarget.dataset.openSalesInvoice);
    location.hash = `#/sales-invoices/${selectedSalesInvoice}`;
  }));
  document.querySelector('[data-back-sales-invoices]')?.addEventListener('click', () => {
    syncActiveSalesInvoiceFromForm();
    saveState();
    location.hash = '#/sales-invoices';
  });
  document.querySelector('[data-save-sales-invoice]')?.addEventListener('click', async event => {
    event.currentTarget.disabled = true;
    syncActiveSalesInvoiceFromForm();
    const response = await saveState();
    flashMessage = response?.ok ? '销售发票已保存' : '保存失败，请检查本地服务';
    route(`sales-invoices/${selectedSalesInvoice}`);
  });
  document.querySelector('[data-delete-sales-invoice]')?.addEventListener('click', () => {
    salesInvoices.splice(selectedSalesInvoice, 1);
    selectedSalesInvoice = 0;
    saveState();
    location.hash = '#/sales-invoices';
  });
  document.querySelectorAll('[data-remove-sales-item]').forEach(button => button.addEventListener('click', event => {
    syncActiveSalesInvoiceFromForm();
    activeSalesInvoice().items.splice(Number(event.currentTarget.dataset.removeSalesItem), 1);
    saveState();
    route(`sales-invoices/${selectedSalesInvoice}`);
  }));
  document.querySelectorAll('[data-sales-qty], [data-sales-price], [data-sales-cost], [data-field="salesRate"]').forEach(input => input.addEventListener('input', refreshSalesTotalsFromForm));
  document.querySelector('[data-field="salesCurrency"]')?.addEventListener('change', event => {
    const invoice = activeSalesInvoice();
    invoice.currency = event.target.value;
    invoice.exchangeRate = currencyRate(invoice.currency);
    route(`sales-invoices/${selectedSalesInvoice}`);
  });
  document.querySelector('[data-sales-item-search]')?.addEventListener('input', event => { salesItemSearch = event.target.value; renderSoon(); });
  document.querySelectorAll('[data-sales-pick]').forEach(input => input.addEventListener('change', () => {
    const count = document.querySelectorAll('[data-sales-pick]:checked').length;
    const label = document.querySelector('[data-sales-selected-count]');
    if (label) label.textContent = `${count} selected`;
  }));
  document.querySelector('[data-add-sales-items]')?.addEventListener('click', () => {
    const invoice = activeSalesInvoice();
    document.querySelectorAll('[data-sales-pick]:checked').forEach(input => {
      const [productIndex, variantIndex] = input.dataset.salesPick.split(':').map(Number);
      const product = products[productIndex];
      const variant = productVariants(product)[variantIndex];
      invoice.items.push({
        description: `${product.name} · ${variantSpec(variant)}`,
        sku: variant.sku,
        quantity: 1,
        unitPrice: Number(variant.selling || product.price || 0),
        unitCost: Number(variant.cost || product.cost || 0)
      });
    });
    modal = null;
    salesItemSearch = '';
    saveState();
    route(`sales-invoices/${selectedSalesInvoice}`);
  });
  document.querySelector('[data-generate-delivery-order]')?.addEventListener('click', async () => {
    syncActiveSalesInvoiceFromForm();
    const invoice = activeSalesInvoice();
    if (!invoice.items.length) {
      window.alert('请先添加发票项目');
      return;
    }
    const exists = deliveryOrders.some(order => order.invoiceNo === invoice.no);
    if (exists) {
      flashMessage = '该发票已生成发货单';
      route(`sales-invoices/${selectedSalesInvoice}`);
      return;
    }
    deliveryOrders.unshift(normalizeDeliveryOrder({
      no: `DO-${compactDate(invoice.date)}-${String(deliveryOrders.length + 1).padStart(4, '0')}`,
      date: invoice.date,
      invoiceNo: invoice.no,
      customer: invoice.customer,
      status: '待发货',
      warehouse: systemSettings.defaultWarehouse || 'HQ',
      items: invoice.items.map(item => ({ sku: item.sku, description: item.description, quantity: item.quantity }))
    }));
    const response = await saveState();
    flashMessage = response?.ok ? '发货单已生成' : '保存失败，请检查本地服务';
    route('delivery-orders');
  });
  document.querySelectorAll('[data-ship-order]').forEach(button => button.addEventListener('click', event => {
    const order = deliveryOrders[Number(event.currentTarget.dataset.shipOrder)];
    if (!order || order.status === '已发货') return;
    order.items.forEach(item => transactions.unshift([prettyDate(order.date), '出库', item.description, String(item.quantity), order.warehouse, order.no]));
    order.status = '已发货';
    saveState();
    route('delivery-orders');
  }));
  document.querySelectorAll('[data-delete-delivery]').forEach(button => button.addEventListener('click', event => {
    const order = deliveryOrders[Number(event.currentTarget.dataset.deleteDelivery)];
    transactions = transactions.filter(row => row[5] !== order.no);
    deliveryOrders.splice(Number(event.currentTarget.dataset.deleteDelivery), 1);
    saveState();
    route('delivery-orders');
  }));
  document.querySelector('[data-save-customer]')?.addEventListener('click', async event => {
    const customer = readCustomerForm();
    if (!customer.name) {
      document.querySelector('[data-field="customerName"]')?.focus();
      return;
    }
    event.currentTarget.disabled = true;
    customers.push(customer);
    if (customerModalTarget === 'sales') {
      const invoice = activeSalesInvoice();
      if (invoice) {
        invoice.customer = customer.name;
        invoice.currency = customer.currency || invoice.currency;
        invoice.exchangeRate = currencyRate(invoice.currency);
      }
    }
    if (customerModalTarget === 'quote') {
      const quote = activeQuotation();
      if (quote) {
        quote.customer = customer.name;
        quote.currency = customer.currency || quote.currency;
        quote.exchangeRate = currencyRate(quote.currency);
      }
    }
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '客户已保存' : '保存失败，请检查本地服务';
    const returnPage = customerModalReturnPage || 'customers';
    customerModalReturnPage = '';
    customerModalTarget = '';
    route(returnPage.startsWith('sales-invoices/') || returnPage.startsWith('quotations/') ? returnPage : 'customers');
  });
  document.querySelectorAll('[data-open-customer]').forEach(button => button.addEventListener('click', event => {
    selectedCustomer = Number(event.currentTarget.dataset.openCustomer);
    modal = 'customer-detail';
    route('customers');
  }));
  document.querySelector('[data-update-customer]')?.addEventListener('click', async event => {
    const customer = readCustomerForm();
    if (!customer.name) return;
    event.currentTarget.disabled = true;
    customers[selectedCustomer] = customer;
    modal = null;
    const response = await saveState();
    flashMessage = response?.ok ? '客户已更新' : '保存失败，请检查本地服务';
    route('customers');
  });
  document.querySelectorAll('[data-delete-customer]').forEach(button => button.addEventListener('click', event => {
    customers.splice(Number(event.currentTarget.dataset.deleteCustomer), 1);
    saveState();
    route('customers');
  }));
  document.querySelector('[data-new-purchase-invoice]')?.addEventListener('click', () => {
    const nextNumber = purchaseInvoices.length + 1;
    purchaseInvoices.unshift(normalizePurchaseInvoice({
      no: `PINV-${compactDate('2026-06-18')}-${String(nextNumber).padStart(4, '0')}`,
      date: '2026-06-18',
      status: '草稿',
      supplier: suppliers[0]?.name || '',
      currency: suppliers[0]?.currency || 'CNY',
      exchangeRate: 1,
      items: []
    }));
    selectedPurchaseInvoice = 0;
    saveState();
    location.hash = '#/purchase-invoices/0';
  });
  document.querySelectorAll('[data-open-purchase-invoice]').forEach(button => button.addEventListener('click', event => {
    selectedPurchaseInvoice = Number(event.currentTarget.dataset.openPurchaseInvoice);
    location.hash = `#/purchase-invoices/${selectedPurchaseInvoice}`;
  }));
  document.querySelector('[data-back-purchase-invoices]')?.addEventListener('click', () => {
    syncActiveInvoiceFromForm();
    saveState();
    location.hash = '#/purchase-invoices';
  });
  document.querySelector('[data-save-purchase-invoice]')?.addEventListener('click', async event => {
    event.currentTarget.disabled = true;
    event.currentTarget.innerHTML = `${icons.save}保存中`;
    syncActiveInvoiceFromForm();
    const response = await saveState();
    flashMessage = response?.ok ? '发票已保存' : '保存失败，请检查本地服务';
    route(`purchase-invoices/${selectedPurchaseInvoice}`);
  });
  document.querySelector('[data-delete-purchase-invoice]')?.addEventListener('click', () => {
    purchaseInvoices.splice(selectedPurchaseInvoice, 1);
    selectedPurchaseInvoice = 0;
    saveState();
    location.hash = '#/purchase-invoices';
  });
  document.querySelector('[data-generate-receipt]')?.addEventListener('click', async () => {
    syncActiveInvoiceFromForm();
    const invoice = activeInvoice();
    const existingIndex = goodsReceipts.findIndex(receipt => receipt.invoiceNo === invoice.no);
    if (existingIndex >= 0) {
      selectedGoodsReceipt = existingIndex;
      flashMessage = '该发票已生成收货单';
      location.hash = '#/goods-receipts';
      return;
    }
    const receipt = receiptFromInvoice(invoice);
    if (!receipt.items.length) {
      flashMessage = '请先添加发票明细';
      route(`purchase-invoices/${selectedPurchaseInvoice}`);
      return;
    }
    goodsReceipts.unshift(receipt);
    selectedGoodsReceipt = 0;
    invoice.status = '已收货';
    addReceiptStock(receipt);
    const response = await saveState();
    flashMessage = response?.ok ? '已生成收货单并完成入库' : '生成失败，请检查本地服务';
    location.hash = '#/goods-receipts';
  });
  document.querySelectorAll('[data-open-grn]').forEach(button => button.addEventListener('click', event => {
    selectedGoodsReceipt = Number(event.currentTarget.dataset.openGrn);
    modal = 'goods-receipt-detail';
    route('goods-receipts');
  }));
  document.querySelectorAll('[data-delete-grn]').forEach(button => button.addEventListener('click', event => {
    const index = Number(event.currentTarget.dataset.deleteGrn);
    const receipt = goodsReceipts[index];
    if (!receipt) return;
    removeReceiptStock(receipt);
    goodsReceipts.splice(index, 1);
    saveState();
    route('goods-receipts');
  }));
  document.querySelector('[data-field="invoiceSupplier"]')?.addEventListener('change', () => {
    syncActiveInvoiceFromForm();
    route(`purchase-invoices/${selectedPurchaseInvoice}`);
  });
  document.querySelector('[data-field="invoiceCurrency"]')?.addEventListener('change', () => {
    syncActiveInvoiceFromForm();
    route(`purchase-invoices/${selectedPurchaseInvoice}`);
  });
  document.querySelector('[data-field="invoiceRate"]')?.addEventListener('input', refreshInvoiceTotalsFromForm);
  document.querySelectorAll('[data-invoice-qty], [data-invoice-cost]').forEach(input => {
    input.addEventListener('input', refreshInvoiceTotalsFromForm);
  });
  document.querySelector('[data-invoice-item-search]')?.addEventListener('input', event => {
    invoiceItemSearch = event.target.value;
    renderSoon();
  });
  document.querySelectorAll('[data-invoice-pick]').forEach(input => input.addEventListener('change', () => {
    const count = document.querySelectorAll('[data-invoice-pick]:checked').length;
    const label = document.querySelector('[data-picker-count]');
    if (label) label.textContent = `已选择 ${count} 项`;
  }));
  document.querySelector('[data-add-selected-invoice-items]')?.addEventListener('click', () => {
    const invoice = activeInvoice();
    document.querySelectorAll('[data-invoice-pick]:checked').forEach(input => {
      const [productIndex, variantIndex] = input.dataset.invoicePick.split(':').map(Number);
      invoice.items.push(invoiceItemFromSelection(productIndex, variantIndex));
    });
    invoiceItemSearch = '';
    modal = null;
    saveState();
    route(`purchase-invoices/${selectedPurchaseInvoice}`);
  });
  document.querySelectorAll('[data-remove-invoice-item]').forEach(button => button.addEventListener('click', event => {
    syncActiveInvoiceFromForm();
    activeInvoice().items.splice(Number(event.currentTarget.dataset.removeInvoiceItem), 1);
    saveState();
    route(`purchase-invoices/${selectedPurchaseInvoice}`);
  }));
  document.querySelector('[data-save-supplier]')?.addEventListener('click', () => {
    const supplier = readSupplierForm();
    if (!supplier.name) {
      document.querySelector('[data-field="supplierName"]')?.focus();
      return;
    }
    suppliers.unshift(supplier);
    modal = null;
    saveState();
    route('suppliers');
  });
  document.querySelectorAll('[data-open-supplier]').forEach(button => button.addEventListener('click', event => {
    selectedSupplier = Number(event.currentTarget.dataset.openSupplier);
    modal = 'supplier-detail';
    route('suppliers');
  }));
  document.querySelector('[data-update-supplier]')?.addEventListener('click', () => {
    const supplier = readSupplierForm();
    if (!supplier.name) {
      document.querySelector('[data-field="supplierName"]')?.focus();
      return;
    }
    suppliers[selectedSupplier] = supplier;
    modal = null;
    saveState();
    route('suppliers');
  });
  document.querySelectorAll('[data-delete-supplier]').forEach(button => button.addEventListener('click', event => {
    suppliers.splice(Number(event.currentTarget.dataset.deleteSupplier), 1);
    saveState();
    route('suppliers');
  }));
  document.querySelector('[data-toggle-stock-picker]')?.addEventListener('click', event => {
    event.preventDefault();
    stockPickerOpen = !stockPickerOpen;
    route(currentPage());
  });
  document.querySelector('[data-stock-picker-search]')?.addEventListener('input', event => {
    stockPickerSearch = event.target.value;
    renderSoon();
  });
  document.querySelectorAll('[data-pick-stock]').forEach(button => button.addEventListener('click', event => {
    const [productIndex, variantIndex] = event.currentTarget.dataset.pickStock.split(':').map(Number);
    stockProductIndex = productIndex;
    stockVariantIndex = variantIndex;
    stockPickerOpen = false;
    stockPickerSearch = '';
    route(currentPage());
  }));
  document.querySelectorAll('[data-tab]').forEach(btn => btn.addEventListener('click', () => { inventoryTab = btn.dataset.tab; route('inventory'); }));
  document.querySelector('[data-add-product]')?.addEventListener('click', () => {
    const name = fieldValue('productName');
    if (!name) {
      document.querySelector('[data-field="productName"]')?.focus();
      return;
    }
    products.unshift({
      name,
      sku: uniqueSku(fieldValue('sku', name.toUpperCase().replace(/[^A-Z0-9]+/g, '').slice(0, 10) || 'NEWPROD')),
      category: fieldValue('category', '轮组'),
      unit: fieldValue('unit', 'pcs'),
      price: Number(fieldValue('price', '0')) || 0,
      cost: Number(fieldValue('cost', '0')) || 0,
      threshold: Number(fieldValue('threshold', '5')) || 5,
      description: fieldValue('description'),
      attributes: cloneAttributes(attributes),
      variants: []
    });
    products[0].variants = generateVariantList(products[0]);
    selectedProduct = 0;
    modal = null;
    saveState();
    route('products');
  });
  document.querySelectorAll('[data-attr-name]').forEach(input => input.addEventListener('input', event => {
    const product = products[selectedProduct];
    const index = Number(event.target.dataset.attrName);
    productAttributes(product)[index].name = event.target.value.trim() || `属性 ${index + 1}`;
    saveState();
  }));
  document.querySelectorAll('[data-add-attribute]').forEach(button => button.addEventListener('click', event => {
    const product = products[selectedProduct];
    const name = event.currentTarget.dataset.addAttribute;
    if (!productAttributes(product).some(attr => attr.name === name)) {
      product.attributes.push({ name, values: [] });
      product.variants = [];
      saveState();
      route('products');
    }
  }));
  document.querySelectorAll('[data-remove-attribute]').forEach(button => button.addEventListener('click', event => {
    const product = products[selectedProduct];
    const index = Number(event.currentTarget.dataset.removeAttribute);
    productAttributes(product).splice(index, 1);
    product.variants = generateVariantList(product);
    saveState();
    route('products');
  }));
  document.querySelectorAll('[data-add-value]').forEach(button => button.addEventListener('click', event => {
    const product = products[selectedProduct];
    const index = Number(event.currentTarget.dataset.addValue);
    const input = document.querySelector(`[data-value-input="${index}"]`);
    const value = input?.value.trim();
    if (value && !productAttributes(product)[index].values.includes(value)) {
      product.attributes[index].values.push(value);
      product.variants = generateVariantList(product);
      saveState();
      route('products');
    }
  }));
  document.querySelectorAll('[data-remove-value]').forEach(button => button.addEventListener('click', event => {
    const [attrIndexText, valueIndexText] = event.currentTarget.dataset.removeValue.split(':');
    const product = products[selectedProduct];
    productAttributes(product)[Number(attrIndexText)].values.splice(Number(valueIndexText), 1);
    product.variants = generateVariantList(product);
    saveState();
    route('products');
  }));
  document.querySelector('[data-generate-variants]')?.addEventListener('click', () => {
    const product = products[selectedProduct];
    product.variants = generateVariantList(product);
    saveState();
    route('products');
  });
  document.querySelector('[data-add-manual-variant]')?.addEventListener('click', () => {
    const product = products[selectedProduct];
    const options = productAttributes(product).map(attr => attr.values[0] || `${attr.name}值`);
    product.variants.unshift({
      options,
      sku: `${product.sku}-MANUAL-${product.variants.length + 1}`,
      selling: Number(product.price) || 0,
      cost: Number(product.cost) || 0,
      active: true
    });
    saveState();
    route('products');
  });
  document.querySelector('[data-save-variants]')?.addEventListener('click', () => {
    const product = products[selectedProduct];
    productVariants(product).forEach((variant, index) => {
      variant.selling = Number(document.querySelector(`[data-variant-selling="${index}"]`)?.value || 0);
      variant.cost = Number(document.querySelector(`[data-variant-cost="${index}"]`)?.value || 0);
      variant.active = Boolean(document.querySelector(`[data-variant-active="${index}"]`)?.checked);
    });
    saveState();
    route('products');
  });
  document.querySelectorAll('[data-delete-variant]').forEach(button => button.addEventListener('click', event => {
    const product = products[selectedProduct];
    productVariants(product).splice(Number(event.currentTarget.dataset.deleteVariant), 1);
    saveState();
    route('products');
  }));
  document.querySelector('[data-delete-product]')?.addEventListener('click', () => {
    if (products.length <= 1) return;
    products.splice(selectedProduct, 1);
    selectedProduct = Math.max(0, selectedProduct - 1);
    saveState();
    route('products');
  });
  document.querySelector('[data-duplicate-product]')?.addEventListener('click', () => {
    const source = products[selectedProduct];
    const copy = JSON.parse(JSON.stringify(source));
    copy.name = `${source.name} 副本`;
    copy.sku = uniqueSku(`${source.sku}COPY`.slice(0, 18));
    products.unshift(copy);
    selectedProduct = 0;
    saveState();
    route('products');
  });
  document.querySelector('[data-stock-action]')?.addEventListener('click', () => {
    const { product, variant } = stockSelection();
    const date = fieldValue('stockDate', '2026-06-18');
    const qty = Math.max(1, Number(fieldValue('stockQty', '1')) || 1);
    const warehouse = fieldValue('warehouse', 'HQ');
    const batch = fieldValue('batch', '-');
    transactions.unshift([prettyDate(date), modal === 'stock-out' ? '出库' : '入库', `${product.name} - ${variantSpec(variant)}`, String(qty), warehouse, batch || '-']);
    modal = null;
    stockPickerOpen = false;
    inventoryTab = 'transactions';
    saveState();
    route('inventory');
  });
  document.querySelector('[data-generate]')?.addEventListener('click', () => {
    const { product, variant } = stockSelection();
    const date = fieldValue('serialDate', '2026-06-18');
    const qty = Math.max(1, Number(fieldValue('serialQty', '1')) || 1);
    const start = serials.length + 1;
    for (let index = 0; index < qty; index += 1) {
      serials.unshift([
        `RW-${compactDate(date)}-${String(start + index).padStart(4, '0')}`,
        product.name,
        variantSpec(variant),
        prettyDate(date),
        '可用',
        'QR'
      ]);
    }
    modal = null;
    saveState();
    route('serial-qr');
  });
  document.querySelectorAll('[data-export]').forEach(btn => btn.addEventListener('click', () => exportCurrent(btn.dataset.export)));
}

let renderTimer;
function renderSoon() {
  clearTimeout(renderTimer);
  renderTimer = setTimeout(() => route(currentPage()), 120);
}

function exportCurrent(name) {
  const rows = Array.from(document.querySelectorAll('table tr')).map(tr => Array.from(tr.children).map(td => td.textContent.trim()));
  const csv = rows.map(row => row.map(cell => `"${cell.replaceAll('"', '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${name || currentPage()}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

window.addEventListener('hashchange', () => {
  modal = null;
  productSearch = '';
  tableSearch = '';
  route(currentPage());
});

route(currentPage());
loadFromDatabase();
