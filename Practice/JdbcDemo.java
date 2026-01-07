import java.sql.*;

public class JdbcDemo{
	public static void main(String args[]){
		
		String url = "jdbc:mysql://localhost:3306/akash";
		
		try{
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection(url,"root","root");
				if(conn != null){
					PreparedStatement ps = conn.prepareStatement("select * from employee");
		
				ResultSet rs = ps.executeQuery();
		
				while(rs.next()){
				System.out.println(rs.getInt(1));
				System.out.println(rs.getString(2));
				System.out.println(rs.getInt(3));
				}
		}
		}catch(Exception ex){
			System.out.println(ex);
		}
	}
}
		