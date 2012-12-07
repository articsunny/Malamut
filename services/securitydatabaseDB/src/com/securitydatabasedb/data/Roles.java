
package com.securitydatabasedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  securitydatabaseDB.Roles
 *  12/03/2012 09:43:03
 * 
 */
public class Roles {

    private Integer roleId;
    private String roleName;
    private Set<com.securitydatabasedb.data.Users> userss = new HashSet<com.securitydatabasedb.data.Users>();

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public Set<com.securitydatabasedb.data.Users> getUserss() {
        return userss;
    }

    public void setUserss(Set<com.securitydatabasedb.data.Users> userss) {
        this.userss = userss;
    }

}
