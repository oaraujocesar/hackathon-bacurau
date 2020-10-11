export { default as Button } from '../../components/atoms/button/index.vue'
export { default as Input } from '../../components/atoms/input/index.vue'
export { default as Title } from '../../components/atoms/title/index.vue'
export { default as CategoriesCard } from '../../components/molecules/categories-card/index.vue'
export { default as Menu } from '../../components/molecules/menu/index.vue'
export { default as Textfield } from '../../components/molecules/textfield/index.vue'
export { default as FormAuth } from '../../components/organisms/form-auth/index.vue'
export { default as HomeContent } from '../../components/organisms/home-content/index.vue'
export { default as Sidebar } from '../../components/organisms/sidebar/index.vue'

export const LazyButton = import('../../components/atoms/button/index.vue' /* webpackChunkName: "components/atoms/button/index" */).then(c => c.default || c)
export const LazyInput = import('../../components/atoms/input/index.vue' /* webpackChunkName: "components/atoms/input/index" */).then(c => c.default || c)
export const LazyTitle = import('../../components/atoms/title/index.vue' /* webpackChunkName: "components/atoms/title/index" */).then(c => c.default || c)
export const LazyCategoriesCard = import('../../components/molecules/categories-card/index.vue' /* webpackChunkName: "components/molecules/categories-card/index" */).then(c => c.default || c)
export const LazyMenu = import('../../components/molecules/menu/index.vue' /* webpackChunkName: "components/molecules/menu/index" */).then(c => c.default || c)
export const LazyTextfield = import('../../components/molecules/textfield/index.vue' /* webpackChunkName: "components/molecules/textfield/index" */).then(c => c.default || c)
export const LazyFormAuth = import('../../components/organisms/form-auth/index.vue' /* webpackChunkName: "components/organisms/form-auth/index" */).then(c => c.default || c)
export const LazyHomeContent = import('../../components/organisms/home-content/index.vue' /* webpackChunkName: "components/organisms/home-content/index" */).then(c => c.default || c)
export const LazySidebar = import('../../components/organisms/sidebar/index.vue' /* webpackChunkName: "components/organisms/sidebar/index" */).then(c => c.default || c)
