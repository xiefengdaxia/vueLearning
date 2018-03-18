var vm = new Vue({
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
        classObj:{active:true,danger:true},
    },
    methods: {
        greet: function (time) {
            console.log(this);
            return "Good " + time + " " + this.name + "!";
        },
        btnClick: function () {
            this.msg = this.msg.split('').reverse().join('');
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
        }
    }
});
// $watch 是一个实例方法
// 这个回调将在 vm.kilometers 改变后调用
vm.$watch('rectangle.width', function () {
    this.rectangle.area = this.rectangle.width * this.rectangle.height;
})