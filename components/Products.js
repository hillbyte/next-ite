import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';

const ALL_PRODUCTS = gql`
  query ALL_PPODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS);
  //   console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ProductsList>
      {data.allProducts.map((product) => (
        // <p key={product.id}>{product.name}</p>
        <Product key={product.id} product={product} />
      ))}
    </ProductsList>
  );
}
export default Products;
