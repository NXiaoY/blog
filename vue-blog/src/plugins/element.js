import Vue from 'vue'
import { Button, Card, Input, Loading, Message, MessageBox, Row, Col, Backtop, Notification, Form, Breadcrumb, BreadcrumbItem, Link, Dialog, FormItem } from 'element-ui'

Vue.use(Button)
Vue.use(Card)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Row)
Vue.use(Col)
Vue.use(Backtop)
Vue.use(Form)
Vue.use(Link)
Vue.use(Dialog)
Vue.use(FormItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.prototype.$message = Message
Vue.prototype.$notification = Notification
Vue.prototype.$confirm = MessageBox.confirm
