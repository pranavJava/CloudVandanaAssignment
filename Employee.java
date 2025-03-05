import java.util.ArrayList;
import java.util.List;

public class Employee {
    private int id;
    private String name;
    private double salary;

    public Employee(int Id, String Name, double Salary) {
        this.id = Id;
        this.name = Name;
        this.salary = Salary;
    }

    
    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Employee Name: " + name);
        System.out.println("Employee Salary: " + salary);
        System.out.println();  
    }

    public static void main(String[] args) {
      
        Employee emp1 = new Employee(101, "Pranav Yadav", 40000);
        Employee emp2 = new Employee(102, "Sumit Jadhav", 69000);
        Employee emp3 = new Employee(103, "Monika Yadav", 85000);

        
        List<Employee> EmpList = new ArrayList<>();
        EmpList.add(emp1);
        EmpList.add(emp2);
        EmpList.add(emp3);

       
        for (Employee emp : EmpList) {
            emp.displayDetails();
        }
    }
}
