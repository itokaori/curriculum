var app = new Vue({
    el: '#app',
    data: {
        list: [],               
        words: ['テスト１', 'テスト２', 'タスク１', 'タスク２', 'サンプル１'],
       newboxs: [],
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
            for(let i = 0; this.list.length; i++) {
                if(!this.list[i].isChecked) {
                    count++;
                }
            }
            return count;
        }
    },
    taskItems: function() {
        let a = this.words.indexOf('テスト１');
        let b = this.words.indexOf('テスト２');
        let c = this.words.indexOf('タスク１');
        let d = this.words.indexOf('タスク２');
        let e = this.words.indexOf('サンプル１');
        newboxs.push = a,b,c,d,e;
            
    }
           
        
});