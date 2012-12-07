
package com.issuedatabasedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  issuedatabaseDB.IssueType
 *  11/29/2012 17:12:40
 * 
 */
public class IssueType {

    private Integer issueTypeId;
    private String type;
    private Set<com.issuedatabasedb.data.Issues> issuess = new HashSet<com.issuedatabasedb.data.Issues>();

    public Integer getIssueTypeId() {
        return issueTypeId;
    }

    public void setIssueTypeId(Integer issueTypeId) {
        this.issueTypeId = issueTypeId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Set<com.issuedatabasedb.data.Issues> getIssuess() {
        return issuess;
    }

    public void setIssuess(Set<com.issuedatabasedb.data.Issues> issuess) {
        this.issuess = issuess;
    }

}
