import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
// const ProductDetail = React.lazy(() => import('./views/base/productDetails/ProductDetail'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
//product start ////
const AddPage = React.lazy(() => import('./views/components/products/addPage/AddPage'))

const Intermediates = React.lazy(() =>
  import('./views/components/products/Intermediates/Intermediates'),
)
const PersonalCare = React.lazy(() =>
  import('./views/components/products/PersonalCare/PersonalCare'),
)
const SpecialityChemicals = React.lazy(() =>
  import('./views/components/products/SpecialityChemicals/SpecialityChemicals'),
)
const API = React.lazy(() => import('./views/components/products/API/API'))
const AddProductCategories = React.lazy(() =>
  import('./views/components/products/ProductCategories/AddProductCategories'),
)

const EditProductPage = React.lazy(() =>
  import('./views/components/products/EditProductPage/EditProductPage'),
)

/// Product ends ///

/// Supply Chain Solutions ///
const Benefits = React.lazy(() =>
  import('./views/components/SupplyChainSolutions/Benefits/Benefits'),
)
const Gmp = React.lazy(() => import('./views/components/SupplyChainSolutions/GMP/Gmp'))
const GlobalCompliance = React.lazy(() =>
  import('./views/components/SupplyChainSolutions/GlobalCompliance/GlobalCompliance'),
)

/// Supply Chain Solutions Ends ///
const AddImage = React.lazy(() => import('./views/components/Images/AddImage'))

// Custom Synthesis start//
const AnalyticalSupport = React.lazy(() =>
  import('./views/components/CustomSynthesis/AnalyticalSupport/AnalyticalSupport'),
)
const ChemicalCapabilities = React.lazy(() =>
  import('./views/components/CustomSynthesis/ChemicalCapabilities/ChemicalCapabilities'),
)
const ChemicalProcessDevelopment = React.lazy(() =>
  import(
    './views/components/CustomSynthesis/ChemicalProcessDevelopment/ChemicalProcessDevelopment'
  ),
)
const CoreCompetencies = React.lazy(() =>
  import('./views/components/CustomSynthesis/CoreCompetencies/CoreCompetencies'),
)
const CustomChemicalSolutions = React.lazy(() =>
  import('./views/components/CustomSynthesis/CustomChemicalSolutions/CustomChemicalSolutions'),
)
const Logistics = React.lazy(() => import('./views/components/CustomSynthesis/Logistics/Logistics'))

// Custom Synthesis end//

//Facility start//
const Drying = React.lazy(() => import('./views/components/Facilities/Drying'))
const EffluentTreatment = React.lazy(() =>
  import('./views/components/Facilities/EffluentTreatment'),
)
const ImageUpload = React.lazy(() =>
  import('./views/components/Facilities/ImageUpload/ImageUpload'),
)
const Labs = React.lazy(() => import('./views/components/Facilities/Labs'))
const PilotPlant = React.lazy(() => import('./views/components/Facilities/PilotPlant'))
const PlantBuilding = React.lazy(() => import('./views/components/Facilities/PlantBuilding'))
const ProductionBlock = React.lazy(() => import('./views/components/Facilities/ProductionBlock'))
const RawMaterials = React.lazy(() => import('./views/components/Facilities/RawMaterials'))
const Solvent = React.lazy(() => import('./views/components/Facilities/Solvent'))
const Utilities = React.lazy(() => import('./views/components/Facilities/Utilities'))
// about us start //
const WhoGMP = React.lazy(() => import('./views/components/AboutUs/WhoGmp'))
const QualityPolicy = React.lazy(() => import('./views/components/AboutUs/QualityPolicy'))
const HealthSafetyEnvironmentGuidelines = React.lazy(() =>
  import('./views/components/AboutUs/HealthSafetyEnvironmentGuidelines'),
)
const Director = React.lazy(() => import('./views/components/AboutUs/Director'))
const GetPdf = React.lazy(() => import('./views/components/AboutUs/GetPdf'))
// about us end //
// Investor start //
const ProductList = React.lazy(() => import('./views/components/Investor/ProductList'))
const AddInvstorProduct = React.lazy(() => import('./views/components/Investor/AddInvstorProduct'))
const Report = React.lazy(() => import('./views/components/Investor/Report'))
const AddReport = React.lazy(() => import('./views/components/Investor/AddReport'))
const DisplayReport = React.lazy(() => import('./views/components/Investor/DisplayReport'))
const GrievanceCell = React.lazy(() =>
  import('./views/components/Investor/GrievanceCell/GrievanceCell'),
)

//                Investor end             //
const CSR = React.lazy(() => import('./views/components/Csr/Csr'))
const GetPolicyPdf = React.lazy(() => import('./views/components/Csr/GetPolicyPdf'))
const AddPolicy = React.lazy(() => import('./views/components/Csr/AddPolicy'))

//                Extar Page             //
const Disclimer = React.lazy(() => import('./views/components/ExtraPages/Disclaimer'))
const TermAndCondition = React.lazy(() =>
  import('./views/components/ExtraPages/TermsAndConditions'),
)
const Sitemap = React.lazy(() => import('./views/components/ExtraPages/Sitemap'))
const Qoute = React.lazy(() => import('./views/components/contactRequest/Quote/Quote'))
const CustomFormulations = React.lazy(() =>
  import('./views/components/contactRequest/CustomFormulations/CustomFormulations'),
)
const CustomFormulationsPdf = React.lazy(() =>
  import('./views/components/contactRequest/CustomFormulations/CustomFormulationsPdf'),
)
const OrderNow = React.lazy(() => import('./views/components/contactRequest/Order/OrderNow'))
const SampleOrder = React.lazy(() => import('./views/components/contactRequest/Order/SampleOrder'))
const ContactFrom = React.lazy(() =>
  import('./views/components/contactRequest/ContactForm/ContactFrom'),
)

//                Extar Page             //

// Career
const Career = React.lazy(() => import('./views/components/Career/Career '))
const EditCareer = React.lazy(() => import('./views/components/Career/EditCareer'))

//contact
const Contact = React.lazy(() => import('./views/components/Contact/Contact'))
//

const Footer = React.lazy(() => import('./views/components/Footer/Footer'))
//hpmPage start
const Home = React.lazy(() => import('./views/components/Home/Home'))
const ProductHomePage = React.lazy(() => import('./views/components/products/Home/ProductHomePage'))
const SupplyChainSolutionsHomePage = React.lazy(() =>
  import('./views/components/SupplyChainSolutions/Home/Home'),
)
const CustomSynthesisHome = React.lazy(() => import('./views/components/CustomSynthesis/Home/Home'))
const FacilitiesHome = React.lazy(() => import('./views/components/Facilities/Home/Home'))
const AboutHome = React.lazy(() => import('./views/components/AboutUs/Home/Home'))
const InvestorHome = React.lazy(() => import('./views/components/Investor/Home/Home'))
const Banner = React.lazy(() => import('./views/components/Banner/Banner.js'))
const Logo = React.lazy(() => import('./views/components/ExtraPages/Logo/Logo'))
const Alert = React.lazy(() => import('./views/components/Aerlt/Alert'))
const Testimonial = React.lazy(() => import('./views/components/ExtraPages/Testimonial'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  // { path: '/base/accordion/:name', name: 'ProductDetail', element: ProductDetail },

  // product start //
  { path: '/products', name: 'Products', element: ProductHomePage, exact: true },
  { path: '/products/AddPage', name: 'AddPage', element: AddPage },
  { path: '/products/intermediates', name: 'Intermediates', element: Intermediates },
  { path: '/products/personal-care-ingredients', name: 'PersonalCare', element: PersonalCare },
  {
    path: '/products/speciality-chemicals',
    name: 'SpecialityChemicals',
    element: SpecialityChemicals,
  },
  { path: '/products/api', name: 'API', element: API },
  {
    path: '/products/addproductcategories',
    name: 'add product categories',
    element: AddProductCategories,
  },
  { path: '/products/intermediates/:id/:name', name: 'EditProductPage', element: EditProductPage },
  {
    path: '/products/personal-care-ingredients/:id/:name',
    name: 'EditProductPage',
    element: EditProductPage,
  },
  {
    path: '/products/speciality-chemicals/:id/:name',
    name: 'EditProductPage',
    element: EditProductPage,
  },
  { path: '/products/api/:id/:name', name: 'EditProductPage', element: EditProductPage },

  { path: '/product/:name', name: 'Edit Product Page', element: EditProductPage },

  // product end //
  /// Supply Chain Solutions Start //
  { path: '/supply-chain-solutions/benefits', name: 'Benefits', element: Benefits },
  { path: '/supply-chain-solutions/gmp', name: 'GMP', element: Gmp },
  {
    path: '/supply-chain-solutions/global-compliance',
    name: 'Global Compliance',
    element: GlobalCompliance,
  },

  /// Supply Chain Solutions Ends //
  { path: '/image/addimage', name: 'Benefits', element: AddImage },
  // Custom Synthesis end//
  { path: '/custom-synthesis/logistics', name: 'Logistics', element: Logistics },
  {
    path: '/custom-synthesis/analytical-support',
    name: 'Analytical Support',
    element: AnalyticalSupport,
  },
  {
    path: '/custom-synthesis/chemical-process-development',
    name: 'Chemical Process Development',
    element: ChemicalProcessDevelopment,
  },
  {
    path: '/custom-synthesis/custom-chemical-solutions',
    name: 'CustomChemicalSolutions',
    element: CustomChemicalSolutions,
  },
  {
    path: '/custom-synthesis/chemical-capabilities',
    name: 'ChemicalCapabilities',
    element: ChemicalCapabilities,
  },
  {
    path: '/custom-synthesis/core-competencies',
    name: 'CoreCompetencies',
    element: CoreCompetencies,
  },
  /////////////facilities start ///////////
  {
    path: '/facilities/production/plant-building',
    name: 'Plant Building',
    element: PlantBuilding,
  },
  {
    path: '/facilities/production/production-block',
    name: 'Production Block',
    element: ProductionBlock,
  },
  {
    path: '/facilities/production/drying',
    name: 'Drying',
    element: Drying,
  },
  {
    path: '/facilities/pilot-plant',
    name: 'Pilot Plant',
    element: PilotPlant,
  },
  {
    path: '/facilities/labs',
    name: 'Labs',
    element: Labs,
  },
  {
    path: '/facilities/storage/solvent',
    name: 'Solvent',
    element: Solvent,
  },
  {
    path: '/facilities/storage/raw-materials',
    name: 'Raw Materials',
    element: RawMaterials,
  },
  {
    path: '/facilities/utilities',
    name: 'Utilities',
    element: Utilities,
  },
  {
    path: '/facilities/effluent-treatment',
    name: 'Effluent Treatment',
    element: EffluentTreatment,
  },
  {
    path: '/facilities/addimage',
    name: 'Add Image',
    element: ImageUpload,
  },

  ////////////////Investor start ///////
  {
    path: '/investor/productlist',
    name: 'Products',
    element: ProductList,
  },
  {
    path: '/investor/addinvstorproduct',
    name: 'Add Product ',
    element: AddInvstorProduct,
  },
  ////////////////Investor end ///////
  {
    path: '/investor/addinvstorproduct',
    name: 'Add Product ',
    element: AddInvstorProduct,
  },
  {
    path: '/investor/addreport',
    name: 'Add Report ',
    element: AddReport,
  },
  { path: '/investor/productlist/:name', name: 'ProductDetail', element: Report },
  { path: '/investor/:name', name: 'ProductDetail', element: DisplayReport },
  { path: '/investor/grievance-cell', name: 'Grievance Cell', element: GrievanceCell },

  /// about us //
  { path: '/about-us-gmp', name: 'GMP', element: WhoGMP },
  { path: '/about-us-quality-policy', name: 'QualityPolicy', element: QualityPolicy },
  {
    path: '/about-us-health-safety-environment',
    name: 'HealthSafetyEnvironmentGuidelines',
    element: HealthSafetyEnvironmentGuidelines,
  },
  { path: '/about-us-directors', name: 'Director', element: Director },
  { path: '/about-us-health-safety-environment/:id', name: 'Director', element: GetPdf },

  //CSR //
  { path: '/csr', name: 'CSR', element: CSR },
  { path: '/csr/policy/:id', name: 'Policy', element: GetPolicyPdf },
  { path: '/csr/add', name: 'Policy', element: AddPolicy },

  //                Extra Page                //
  { path: 'term&condition', name: 'Term And Condition', element: TermAndCondition },
  { path: 'disclimer', name: 'Disclimer', element: Disclimer },
  { path: 'sitemap', name: 'Sitemap', element: Sitemap },
  { path: '/getquote', name: 'Get Qoute', element: Qoute },
  { path: '/custom-formulation', name: 'Custom Formulations', element: CustomFormulations },
  { path: '/custom-formulation/:id', name: 'Director', element: CustomFormulationsPdf },
  { path: '/ordernow', name: 'Order Now', element: OrderNow },
  { path: '/sampleorder', name: 'Sample Order', element: SampleOrder },
  { path: '/get-contact', name: 'Contact From', element: ContactFrom },

  //Career
  { path: '/career', name: 'Career', element: Career },
  { path: '/career/:id', name: 'Career', element: EditCareer },

  //constact
  { path: '/contact', name: 'Contact', element: Contact },
  { path: '/footer', name: 'Footer', element: Footer },
  // pome page start
  { path: '/home', name: 'Home', element: Home },
  { path: '/product', name: 'Product', element: ProductHomePage, exact: true },
  {
    path: '/supply-chain-solutions',
    name: 'Supply-Chain-Solution-Home',
    element: SupplyChainSolutionsHomePage,
    exact: true,
  },
  { path: 'custom-synthesis', name: 'Home', element: CustomSynthesisHome },
  {
    path: '/facilities',
    name: 'Home',
    element: FacilitiesHome,
  },
  { path: '/investor', name: 'Home', element: InvestorHome },
  { path: '/about-us', name: 'About_us Home', element: AboutHome },
  { path: '/banner', name: 'Banner', element: Banner },
  { path: '/logo', name: 'Logo', element: Logo },
  { path: '/alert', name: 'Alert', element: Alert },

  { path: '/testimonial', name: 'Testimonial', element: Testimonial },
]

export default routes
