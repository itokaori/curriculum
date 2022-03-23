var app = new Vue({
    el: '#app',
    data: {
        list: [],
        addText: '',
        word: [
                {keyword: 'テスト１'},
                {keyword: 'テスト２'},
                {keyword: 'タスク１'},
                {keyword: 'タスク２'},
                {keyword: 'サンプル１'},
        ],
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
    computed: {
        word: function() {
            var word = [];

            for(var i in this.words) {

                var word = this.words[i];

                if(
                  word.indexOf(this.keyword) !== -1) {
                    keyword.push(word);

                }

            }

            return word;

        }
    }
});