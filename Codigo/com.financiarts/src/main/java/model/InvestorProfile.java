package model;

import java.sql.Date;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.javatuples.Pair;

public class InvestorProfile extends Entity<InvestorProfile>{
	
	String knowledge;
	double salary;
	String objective;
	String risk;
	String focus;
	
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
	
	@Override
	@SuppressWarnings("unchecked")
	public Pair<String, String>[] InsertFields(){
		ArrayList<Pair<String,String>> list = new ArrayList<>();
		list.add(Pair.with("knowledge", "'"+ getKnowledge() + "'"));
		list.add(Pair.with("salary", getSalary()+""));
		list.add(Pair.with("objective", "'"+ getObjective() + "'"));
		list.add(Pair.with("risk", "'"+ getRisk() + "'"));
		list.add(Pair.with("focus", "'"+ getFocus() + "'"));
		return list.toArray(new Pair[0]);
	}

	@Override
	public InvestorProfile FromResultSet(ResultSet rs) throws Exception {
		return new InvestorProfile(
			rs.getInt("id"),
			rs.getString("knowledge"),
			rs.getDouble("salary"),
			rs.getString("objective"),
			rs.getString("risk"),
			rs.getString("focus")
		);
	}
	
}
