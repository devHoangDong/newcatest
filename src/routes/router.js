import Account from '../components/body/account/index';
import Home from '../components/body/home/index';
import Dathang from '../components/dathang/index';
import ListItem from '../components/body/home/ListItem';
import Cart from '../components/body/cart/index';
import HelpDesk from '../components/body/helpdesk/index';
import Affiliate from '../components/body/account/content/affiliate/showAffiliate';
import EditAccount from '../components/body/account/content/EditAccount';
import EditPassword from '../components/body/account/content/EditPassword';
import PurchaseOrder from '../components/body/account/content/PurchaseOrder';
const router = [
  {path: '/', exact: true, Component: Home},
  {path: '/home', exact: true, Component: Home},
  {path: '/account', exact: true, Component: Account},
  {path: '/account/affiliate', exact: true, Component: Affiliate},
  {path: '/account/editAccount', exact: true, Component: EditAccount},
  {path: '/account/editPassword', exact: true, Component: EditPassword},
  {path: '/account/purchaseOder', exact: true, Component: PurchaseOrder},
  {path: '/cart', exact: false, Component: Cart},
  {path: '/dathang', exact: false, Component: Dathang},
  {path: '/sanpham', exact: false, Component: ListItem},
  {path: '/help', exact: false, Component: HelpDesk},
]

export default router