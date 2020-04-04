const app = require('./app.js');
const pgClient = require('./pgsql/dbAPI');

// 连接数据库
pgClient.getConnection();

// 获取回调函数里面的结果数据
let getResult = function(res){
    console.log(res);
}


// Example1 postgresql增加数据
app.get('/add', function (req, res) {
    let parm = {
        'name': 'baopeng',
        'password': 'admin'
    };
    
    pgClient.save('user_tab', parm ,getResult);
})

// Example2 postgresql修改数据
app.get('/modify', function (req, res) {
    let newVal = {
        'name':'lyx',
        'id':3
    };
    let oldVal = {
        'name':'baopeng',
        'id':3
    };
    pgClient.update('user_tab',oldVal,newVal,getResult);
})

// Example3 postgresql删除数据
app.get('/remove', function (req, res) {
    let deleteVal = {
        'name':'lyx',
        'id':3
    };
    pgClient.remove('user_tab',deleteVal,getResult);
})

// Example4 postgresql查询数据
app.get('/select', function (req, res) {
    let conditionFields = {
        'name':'baopeng'
    };
    let resultFields = ['id','name','password'];
    pgClient.select('user_tab', conditionFields, resultFields, getResult);
})