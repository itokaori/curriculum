var app = new Vue({
    el: '#app',
    data: {
        list: [],
        words: [
            {id: 1, keyword: "タスク１"},
            {id: 2, keyword: "タスク２"},
            {id: 3, keyword: "テスト１"},
            {id: 4, keyword: "テスト２"},
            {id: 5, keyword: "サンプル１"},
        ],    
        addText: '',
        taskName: '',
     },
    //watchでlistの変更を監視
    watch: {
        list: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        }
    },
    //マウントされた時にlocalStorageからデータを取得
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },
    methods: {
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText, 
                    isChecked: false,
                });
            }
            this.addText = '';
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        }
    },
    computed: {
        tsk_count: function() {
            let count = 0;
            for(let i=0; i < this.list.length; i++) {
                if(!this.list[i].isChecked) {
                    count++;
                }
            }
            return count;
        }
    },
    sublist: function() {
        let arr = [];
        for(let i = 0; i < this.words.length; i++) {
            let sub = this.words[i];
            if(sub.keyword.indexOf(this.taskName) !== -1) {
                arr.push(sub);
            }
        }
        return arr;
        }
   
});