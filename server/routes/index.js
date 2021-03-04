var express = require('express');
var router = express.Router();
const oracledb = require('oracledb');

 oracledb.getConnection({
            user: 'student',
            password: 'student',
            host: 'localhost', 
            database: 'xe'
        }, function (err, conn) {
            if(err){
                console.log('접속 실패', err);
                return;
            }
            console.log('접속 성공');
        });

router.get('/api',function(req,res){

    res.send({greeting:'Hello'});
});


module.exports = router;