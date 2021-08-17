export const itemQuery = `
*[slug.current == $slug][0]{
  'id': _id,
  'type': _type,
  'name': name[$lang],
  'description': description[$lang],
  'seoDescription': metaDescription[$lang],
  'slug': slug.current,
  'images': imageArray,
  'flavors': flavors[$lang],
  'colors': colors[$lang],
  'material': material[$lang],
  category,
  price,
    category,
    vendor-> {
      'title': title[$lang],
      logo,
      "slug": slug.current
    },
    "info": {
      "servingDetails": {
        "unitName": info.servingDetails[$lang],
        "servings": info.servingDetails.numberOfServings,
      },
      "weightDetails": {
        "unitName": info.weightDetails[$lang],
        "weight": info.weightDetails.weight
      }
    },
    'productInfo': {
      'avaliableSizes': productDetails,
      'weight': {'weight': weight.weight, 'unit': weight[$lang]}
      }
}
`;

export const itemsQuery = `*[_type in ["foodAndSupplements", "product"]]{
  'id': _id,
  'type': _type,
  'name': name[$lang],
  'description': description[$lang],
  'slug': slug.current,
  'images': imageArray,
  'flavors': flavors[$lang],
  'colors': colors[$lang],
  'material': material[$lang],
  category,
  price,
    category,
    vendor-> {
      'title': title[$lang],
      logo,
      "slug": slug.current
    },
    "info": {
      "servingDetails": {
        "unitName": info.servingDetails[$lang],
        "servings": info.servingDetails.numberOfServings,
      },
      "weightDetails": {
        "unitName": info.weightDetails[$lang],
        "weight": info.weightDetails.weight
      }
    },
    'productInfo': {
      'avaliableSizes': productDetails,
      'weight': {'weight': weight.weight, 'unit': weight[$lang]}
      }
}`;

export const blogsQuery = `
*[_type == "blog"] | order(dateOfPublish asc){
  author->{
  name,
  "localeName": localizedName[$lang],
  "slug": slug.current,
  },
  "title": localeTitle[$lang],
  "preview": preview[$lang],
  "image": {"alt": image.alt, "asset": image.asset},
  "slug": slug.current,
  dateOfPublish,
  category,
}
`;

export const blogQuery = `
  *[_type == 'blog' && slug.current == $slug][0]{
    author->{
    name,
    "localeName": localizedName[$lang],
    "slug": slug.current,
    "about": about[$lang],
    "moreFromAuthor": *[_type=='blog' && references(^._id)]{
      "title": localeTitle[$lang],
      "slug": slug.current
    }},
    "title": localeTitle[$lang],
    "content": content[$lang],
    "preview": preview[$lang],
    "slug": slug.current,
    dateOfPublish,
    image,
    category,
    _id
  }
`;

export const relatedBlogsQuery = `
  *[_type == 'blog' && category == $category]{
    "title": localeTitle[$lang],
    "slug": slug.current
  }
`;

export const similiarSupplementsQuery = `*[_type == 'foodAndSupplements' && $type in category]{
  'name': name[$lang],
  'slug': slug.current,
  'images': imageArray,
  _id
}`;
export const similiarProductsQuery = `*[_type == 'product' && $type in category]{
  'name': name[$lang],
  'slug': slug.current,
  'images': imageArray,
  _id
}`;

// Liked Blogs Query
export const likedBlogsQuery = `
*[_id in $idsArray]{
  'id': _id,
  'title': localeTitle[$lang],
  'slug': slug.current
}
`;

// items in wishlist
export const itemsInWishlist = `
  *[_id in $idsArray]{
    'id': _id,
    'slug': slug.current,
    'name': name[$lang],
    'image': imageArray[0]
  }
`;
