
const index = () => import('./')
const catalog = () => import('./catalog')
const form = () => import('./form')
const show = () => import('./show')

export default [
  {
    path: '/beers',
    component: index,
    children: [
      {
        path: '/',
        name: 'beers.index',
        component: catalog
      },
      {
        path: ':beer',
        name: 'beers.show',
        component: show
      },
      {
        path: 'form/new',
        name: 'beers.new',
        component: form
      },
      {
        path: 'form/:beer',
        name: 'beers.edit',
        component: form
      }
    ]
  }
]
