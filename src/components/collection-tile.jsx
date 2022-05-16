import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

export function CollectionTile(){

    return (
        <div>

        </div>
    )
}

const query = graphql`
{
allShopifyCollection {
    edges {
      node {
        products {
          title
        }
        description
        title
      }
    }
  }
}
`