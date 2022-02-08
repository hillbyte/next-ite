import Link from 'next/link';
import NavStyles from './styles/NavStyles';

function Nav() {
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      <Link href="/account">Account</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/sell">Sell</Link>
    </NavStyles>
  );
}
export default Nav;
