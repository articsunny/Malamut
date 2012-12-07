
package com.issuedatabasedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  issuedatabaseDB.IssueStatus
 *  11/29/2012 17:12:40
 * 
 */
public class IssueStatus {

    private Integer issueStatusId;
    private String status;
    private Set<com.issuedatabasedb.data.Issues> issuess = new HashSet<com.issuedatabasedb.data.Issues>();

    public Integer getIssueStatusId() {
        return issueStatusId;
    }

    public void setIssueStatusId(Integer issueStatusId) {
        this.issueStatusId = issueStatusId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Set<com.issuedatabasedb.data.Issues> getIssuess() {
        return issuess;
    }

    public void setIssuess(Set<com.issuedatabasedb.data.Issues> issuess) {
        this.issuess = issuess;
    }

}
