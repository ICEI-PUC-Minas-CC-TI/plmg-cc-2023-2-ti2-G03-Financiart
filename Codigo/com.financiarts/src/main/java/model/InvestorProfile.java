package model;

import java.sql.Date;

public class InvestorProfile {
	
	int id;
	String knowledge;
	double salary;
	String objective;
	String risk;
	String focus;

	public int getId() { return id; }
	public void setId(int id) { this.id = id; }
	
	public String getKnowledge() { return knowledge; }
	public void setKnowledge(String knowledge) { this.knowledge = knowledge; }
	
	public double getSalary() { return salary; }
	public void setSalary(double salary) { this.salary = salary; }
	
	public String getObjective() { return objective; }
	public void setObjective(String objective) { this.objective = objective; }
	
	public String getRisk() { return risk; }
	public void setRisk(String risk) { this.risk = risk; }
	
	public String getFocus() { return focus; }
	public void setFocus(String focus) { this.focus = focus; }
	
	public InvestorProfile() {
		this.id = 0;
		this.knowledge = "";
		this.salary = 0;
		this.objective = "";
		this.risk = "";
		this.focus = "";
	}
	
	public InvestorProfile(int id, String knowledge, double salary, String objective, String risk, String focus) {
		this.id = id;
		this.knowledge = knowledge;
		this.salary = salary;
		this.objective = objective;
		this.risk = risk;
		this.focus = focus;
	}
	@Override
	public String toString() {
		return "InvestorProfile [id=" + id + ", knowledge=" + knowledge + ", salary=" + salary + ", objective="
				+ objective + ", risk=" + risk + ", focus=" + focus + "]";
	}
	
	
	
}
