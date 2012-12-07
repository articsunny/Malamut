
package com.dblogusers.data;

import java.util.Date;


/**
 *  dbLogUsers.Userlog
 *  12/01/2012 12:00:08
 * 
 */
public class Userlog {

    private Integer userlogId;
    private Integer userId;
    private String action;
    private Date datetime;

    public Integer getUserlogId() {
        return userlogId;
    }

    public void setUserlogId(Integer userlogId) {
        this.userlogId = userlogId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }

}
