
package com.securitydatabasedb.data;



/**
 *  securitydatabaseDB.Users
 *  12/03/2012 09:43:03
 * 
 */
public class Users {

    private Integer id;
    private String name;
    private String password;
    private String email;
    private Roles relrole;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Roles getRelrole() {
        return relrole;
    }

    public void setRelrole(Roles relrole) {
        this.relrole = relrole;
    }

}
