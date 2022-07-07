const express = require("express");
const con = require("./config");
const app = express();

app.get("/getClassCount", (req, res) => {
  con.query(
    "select o.name, count(c.id) as class_count from organization o inner join classroom c on o.id = c.class_organization_id group by o.id",
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/getChildCount", (req, res) => {
  con.query(
    "select o.name,count(u.id=1) as child_count from user u inner join organization o on o.id = u.organization_id where u.is_child = 1 group by o.id",
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/getTeacherCount", (req, res) => {
  con.query(
    "select o.name,count(usp.security_profile_id) from organization o inner join user u on o.id = u.organization_id inner join user_security_profile usp on u.id = usp.user_id where usp.security_profile_id=5 ",
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/getSchoolCount", (req, res) => {
  con.query(
    "select o.name,count(distinct school.id)from organization o inner join organization school on o.id = school.parent_id group by o.id",
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(5000, () => {
  console.log("getting data");
});
