//定义注册一个全局组件
Vue.component(
    'top', {
        //声明props
        props: ['msg'],
        template: '<h2>头部{{msg}}</h2>'
    }
);
//prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。
Vue.component(
    'todo-item', {
        props: ['todo'],
        template: '<li>{{todo.name}}</li>'
    }
)
//定义一个局部组件
var Child = {
    template: '<h2>底部</h2>'
};

//定义一个带有事件的组件
Vue.component('button-counter', {
    template: '<button v-on:click="addHandler">{{counter}}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        //事件处理
        addHandler: function () {
            this.counter += 1;
            //给组件暴露的事件名称是add
            this.$emit('add');
        }
    },
});

//路由实例
//定义两个页面模板，也可以从其他文件import进来
const aPage = { template: '<div>我是A页面</div>' };
const bPage = { template: '<div>我是B页面</div>' };

const routes=[
    { path: '/a', component: aPage },
    { path: '/b', component: bPage }
]
//定义路由
const router = new VueRouter({
    routes  // （缩写）相当于 routes: routes
}
);

const vm = new Vue({
    router,
    el: '#app',
    data: {
        name: "xiefeng",
        job: "engineer",
        webSite: "http://xiefeng.tk",
        webSiteTag: "<a href='http://www.baidu.com'>百度</a>",
        seen: true,
        msg: "你好",
        ok: true,
        fruit: [{ name: "香蕉" }, { name: "苹果" }, { name: "榴莲" }],
        object: { name: "工程师", url: "xiefeng.tk", info: "前端&C#工程师。" },
        rectangle: { height: 0, width: 0, area: 0 },
        classObj: { active: true, danger: true },
        checked: true,
        picked: "baidu",
        selected: "",
        checkedAll: false,
        checkedNames: [],
        checkedArr: ["Baidu", "Tencent", "Google"],
        //自定义组件的total
        total: 0,
    },
    methods: {
        greet: function (time) {
            console.log(this);
            return "Good " + time + " " + this.name + "!";
        },
        btnClick: function () {
            this.msg = this.msg.split('').reverse().join('');
        },
        showText: function (event) {
            alert('您好,' + this.name + '!');
            if (event) {
                alert(event.target.tagName);
            }
        },
        checkAll: function () {
            if (this.checkedAll) {
                this.checkedNames = this.checkedArr;
            }
            else {
                this.checkedNames = [];
            }
        },
        addTotal: function () {
            this.total += 1;
        }
    },
    filters: {
        filterA: function (value) {
            if (!value) return ''
            value = (value).toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        filterB: function (value, param) {
            var text = value.toString();
            var result = text.replace(/-/g, '#');
            return result;
        }
    },
    computed: {
        //computed 对象内的方法如果在初始化时绑定到元素上的事件会先执行一次这个方法 ，而 methods 内的方法则不会；
        //计算属性的getter
        reversedMsg: function () {
            // `this` 指向 vm 实例
            return this.msg.split('').reverse().join('')
        },
        date: {
            get: function () {
                return new Date().toUTCString();
            },
            set: function () {
                date = new Date().toTimeString();
            }
        }
    },
    watch: {
        rectangle: function () {
            this.rectangle.area = this.rectangle.width * this.rectangle.height;
        },
        checkedNames: function () {
            if (this.checkedNames.length == this.checkedArr.length) {
                this.checkedAll = true;
            }
            else {
                this.checkedAll = false;
            }
        }
    },
    components: {
        'foot': Child
    }
});
// }).$mount('#app');
// $watch 是一个实例方法
// 这个回调将在 rectangle.width 改变后调用
vm.$watch('rectangle.width', function () {
    this.rectangle.area = this.rectangle.width * this.rectangle.height;
});
