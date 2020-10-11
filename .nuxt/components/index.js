export { default as Avatar } from '../../components/atoms/avatar/index.vue'
export { default as Button } from '../../components/atoms/button/index.vue'
export { default as Comment } from '../../components/atoms/comment/index.vue'
export { default as Input } from '../../components/atoms/input/index.vue'
export { default as MyGoalCard } from '../../components/atoms/my-goal-card/index.vue'
export { default as PodiumItem } from '../../components/atoms/podium-item/index.vue'
export { default as PublicGoalCard } from '../../components/atoms/public-goal-card/index.vue'
export { default as Subgoal } from '../../components/atoms/subgoal/index.vue'
export { default as Title } from '../../components/atoms/title/index.vue'
export { default as CategoriesCard } from '../../components/molecules/categories-card/index.vue'
export { default as CommentModal } from '../../components/molecules/comment-modal/index.vue'
export { default as Menu } from '../../components/molecules/menu/index.vue'
export { default as Textfield } from '../../components/molecules/textfield/index.vue'
export { default as FormAuth } from '../../components/organisms/form-auth/index.vue'
export { default as HomeContent } from '../../components/organisms/home-content/index.vue'
export { default as Sidebar } from '../../components/organisms/sidebar/index.vue'

export const LazyAvatar = import('../../components/atoms/avatar/index.vue' /* webpackChunkName: "components/atoms/avatar/index" */).then(c => c.default || c)
export const LazyButton = import('../../components/atoms/button/index.vue' /* webpackChunkName: "components/atoms/button/index" */).then(c => c.default || c)
export const LazyComment = import('../../components/atoms/comment/index.vue' /* webpackChunkName: "components/atoms/comment/index" */).then(c => c.default || c)
export const LazyInput = import('../../components/atoms/input/index.vue' /* webpackChunkName: "components/atoms/input/index" */).then(c => c.default || c)
export const LazyMyGoalCard = import('../../components/atoms/my-goal-card/index.vue' /* webpackChunkName: "components/atoms/my-goal-card/index" */).then(c => c.default || c)
export const LazyPodiumItem = import('../../components/atoms/podium-item/index.vue' /* webpackChunkName: "components/atoms/podium-item/index" */).then(c => c.default || c)
export const LazyPublicGoalCard = import('../../components/atoms/public-goal-card/index.vue' /* webpackChunkName: "components/atoms/public-goal-card/index" */).then(c => c.default || c)
export const LazySubgoal = import('../../components/atoms/subgoal/index.vue' /* webpackChunkName: "components/atoms/subgoal/index" */).then(c => c.default || c)
export const LazyTitle = import('../../components/atoms/title/index.vue' /* webpackChunkName: "components/atoms/title/index" */).then(c => c.default || c)
export const LazyCategoriesCard = import('../../components/molecules/categories-card/index.vue' /* webpackChunkName: "components/molecules/categories-card/index" */).then(c => c.default || c)
export const LazyCommentModal = import('../../components/molecules/comment-modal/index.vue' /* webpackChunkName: "components/molecules/comment-modal/index" */).then(c => c.default || c)
export const LazyMenu = import('../../components/molecules/menu/index.vue' /* webpackChunkName: "components/molecules/menu/index" */).then(c => c.default || c)
export const LazyTextfield = import('../../components/molecules/textfield/index.vue' /* webpackChunkName: "components/molecules/textfield/index" */).then(c => c.default || c)
export const LazyFormAuth = import('../../components/organisms/form-auth/index.vue' /* webpackChunkName: "components/organisms/form-auth/index" */).then(c => c.default || c)
export const LazyHomeContent = import('../../components/organisms/home-content/index.vue' /* webpackChunkName: "components/organisms/home-content/index" */).then(c => c.default || c)
export const LazySidebar = import('../../components/organisms/sidebar/index.vue' /* webpackChunkName: "components/organisms/sidebar/index" */).then(c => c.default || c)
