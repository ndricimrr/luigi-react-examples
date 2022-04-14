Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
         {
            category: { label: 'Orders', icon: 'product', collapsible: true },
            pathSegment: 'orders',
            keepSelectedForChildren: true,
            label: 'Orders',
            viewUrl: "http://localhost:5001",
            navigationContext:'root',
            loadingIndicator: {
              enabled: false
            },
            children: [
              {
                pathSegment: ':orderId',
                label: 'Order Detail',
                viewUrl: 'http://localhost:4001/:orderId',
                loadingIndicator: {
                  enabled: false
                },
              }
            ],
          },
          {
            pathSegment: 'products', 
            label: 'VirtualExample', 
            loadingIndicator: {
                enabled: false
            },
            virtualTree: true,
            viewUrl: 'http://localhost:5001/products'
            
          }
        ]
      }
    ]
  },
  settings: {
    header: {
      title: 'Luigi React App',
      logo: '/logo.png'
    },
    responsiveNavigation: 'simpleMobileOnly'
  }
});
