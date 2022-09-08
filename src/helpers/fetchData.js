export const fetchData = () => {
  fetch('http://webapi.ep7.ir/TourismAPI/GetCollectionsProducts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authentication: '{"PrivateKey": "W0rK$h0pOL1yhn2#$F22UJMikOL>p"}',
      Authorization: '{"Token": "-1"}',
    },
    body: JSON.stringify({
      shopID: 11015,
      CityID: -1,
      CollectionCategoryID: -1,
      CollectionID: -1,
      ProductCategoryID: -1,
      TagID: '-1',
      GenderID: '-1',
      FromDate: '-1',
      ToDate: '-1',
      Content: '',
      ProductID: -1,
      Resolution: '500*500',
      Browser: navigator.userAgent,
      IP: '192.168.1.1',
      Host: '192.168.1.1',
      MacAddress: '15:54:21:32:12',
      OS: 'test',
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};
