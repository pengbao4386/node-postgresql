# node-postgresql
This is a project of adding, deleting, modifying and querying PostgreSQL database based on node.

### 使用步骤 Get Started
cd this this project path <br>
then: 
`npm install
`
### 接口使用介绍 API usage examples
你可以在项目中的server.js文件中进行postgresql数据库的基本增删改查操作 （You can add, delete, modify and query the PostgreSQL database in the server.js file of the project）<br>

###### 1.向数据库表中增加数据
//@param tablename 数据表名称<br>
//@param fields 更新的字段和值，json格式<br>
//@param cb 回调函数<br>
`const PG = require('./pgsql/dbAPI');`<br>
`PG.save(tablename,fileds,cb)`<br>
参数示例 Parameter example ==>> 向user_table数据表增加一条'name'字段为'pon'的一行数据<br>
`PG.save('user_table',{'name':'pon'},function (result){console.log(result)})`<br>
###### 2.删除数据库表中数据
//@param tablename 数据表名称
//@param fields 条件字段和值，json格式
//@param cb 回调函数
`const PG = require('./pgsql/dbAPI');`<br>
`PG.remove(tablename,fileds,cb)`<br>
参数示例 Parameter example ==>> 删除user_table数据表中'name'字段为'pon'的数据<br>
`PG.save('user_table',{'name':'pon'},function (result){console.log(result)})`<br>
###### 3.修改数据库表中数据
//@param tablename 数据表名称<br>
//@param fields 更新的字段和值，json格式<br>
//@param mainfields 条件字段和值，json格式<br>
`const PG = require('./pgsql/dbAPI');`<br>
`PG.update(tablename,mainfields,fileds,cb)`<br>
参数示例 Parameter example ==>> 将user_table数据表中'name'字段值为'pon'的数据修改为'loury'<br>
`PG.save('user_table',{'name':'pon'},{'name':'loury'},function (result){console.log(result)})`<br>
###### 4.查询数据库表中数据
//@param tablename 数据表名称<br>
//@param fields 条件字段和值，json格式<br>
//@param returnfields 查询的结果的返回的字段，数组形式[]<br>
//@param cb 回调函数<br>
`const PG = require('./pgsql/dbAPI');`<br>
`PG.select(tablename, fields, returnfields, cb)`<br>
参数示例 Parameter example ==>> 查询user_table数据表中'name'字段值为'pon'的数据，返回字段'id','name','password'行数据结果<br>
`PG.save('user_table',{'name':'pon'},['id','name','password'],function (result){console.log(result)})`<br>
