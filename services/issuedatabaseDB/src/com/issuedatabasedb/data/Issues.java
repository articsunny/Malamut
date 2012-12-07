
package com.issuedatabasedb.data;



/**
 *  issuedatabaseDB.Issues
 *  11/29/2012 17:12:40
 * 
 */
public class Issues {

    private Integer issueId;
    private String omschrijving;
    private IssueType issuetype;
    private IssueStatus issuestatus;

    public Integer getIssueId() {
        return issueId;
    }

    public void setIssueId(Integer issueId) {
        this.issueId = issueId;
    }

    public String getOmschrijving() {
        return omschrijving;
    }

    public void setOmschrijving(String omschrijving) {
        this.omschrijving = omschrijving;
    }

    public IssueType getIssuetype() {
        return issuetype;
    }

    public void setIssuetype(IssueType issuetype) {
        this.issuetype = issuetype;
    }

    public IssueStatus getIssuestatus() {
        return issuestatus;
    }

    public void setIssuestatus(IssueStatus issuestatus) {
        this.issuestatus = issuestatus;
    }

}
