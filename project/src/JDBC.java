import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBC{
    public static void main(String[] args){
        String url = "jdbc.mysql://localhost:3306/olympicarchery";
        String username = "root";
        String password = "Meeper101!";
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url,username,password);

            Statement statement = connection.createStatement();

            ResultSet resultSet = statement.executeQuery("select * from country ");

            while (resultSet.next()){
                System.out.println(resultSet.getString(1) + "  "+resultSet.getInt(2) + "  " +
                        resultSet.getInt(3)+ " " + resultSet.getInt(4));
            }

            connection.close();

        } catch (Exception e){
            e.printStackTrace();
        }
    }
}