var app = new Vue({
    el: '#app',
    data: {
        todoes: [],
        message: '',
        check: 'yes'

    },
    mounted: function(index) {
        var outLocal = JSON.parse(localStorage.getItem('option'))
        for (var i = 0; i < outLocal.length; i++) {
            this.todoes.push({ name: outLocal[i].name, time: outLocal[i].time })
        }
    },
    methods: {
        addItem: function() {
            for (var i = 0; i < this.todoes.length; i++) {
                // console.log(this.todoes[i].name)
                if (this.todoes[i].name === this.message) {
                    this.check = 'no'
                } else {
                    this.check = 'yes'
                }
            }
            console.log(this.check)
            if (this.check === 'yes') {
                this.todoes.push({ name: this.message, time: checkTime() })
                localStorage.setItem("option", JSON.stringify(this.todoes))
                myLogFunc('alert-success', ' was created')
            } else {
                alert(this.message + ' exists!')
            }
            console.log(this.check)
        },
        removeItem(index) {
            myLogFunc('alert-danger', ' was removed')
            this.todoes.splice(index, 1)
            localStorage.setItem("option", JSON.stringify(this.todoes))

        }
    },
    computed: {
        filteredArr() {
            var filtered = this.todoes.filter(function() {

            })
        }
    }
})

function checkTime() {
    return new Date().toLocaleTimeString() + ' ' + new Date().toDateString()
}

function myLogFunc(addClass, status) {
    var myLog = document.createElement('div')
    myLog.classList.add('alert')
    myLog.classList.add(addClass)
    myLog.innerHTML = '<strong>' + app.message + '</strong>' + status + '<span class="addTime" style="color: #333">' + checkTime() + '</span>'
    document.getElementsByClassName('log-contaner')[0].appendChild(myLog)
}