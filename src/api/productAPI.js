import BASE_URL from '../utils/baseUrl';

const productAPI = {
  // 상품 리스트
  async getProductList(token, accountName) {
    const response = await fetch(BASE_URL + `/product/${accountName}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('네트워크에 문제가 있습니다!');
    }

    const data = await response.json();
    console.log('productAPI.getProductList: 상품 리스트', data);
    return data;
  },
  async addProduct(token, productName, productPrice, saleLink, productImg) {
    try {
      const response = await fetch(BASE_URL + `/product`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          product: {
            itemName: productName,
            price: parseInt(productPrice.replace(/,/g, '')), // 1원 이상
            link: saleLink,
            itemImage: productImg,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('네트워크에 문제가 있습니다!');
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  },
};

export default productAPI;
