class DB {
  constructor() {
    this.oracledb = require('oracledb');
  }
  
  async createUserTicket(idTicketUser, date, amountSpend, modality){
    let connection;
  
    try {
  
      connection = await this.oracledb.getConnection({ user: "system", password: "1234", connectionString: "localhost:1521/xe" });
  
      console.log("Successfully connected to Oracle Database");
      
      const sql1 = "INSERT INTO TICKET_USER (ID_TICKET_USER, GENERATION_DATE, AMOUNT_SPEND, MODALITY) "+
      "VALUES (:0,:1,:2,:3)";
      
      const dados = [idTicketUser,date,amountSpend,modality];
      let result = await connection.execute(sql1,dados);
      
      console.log(result.rowsAffected);
      console.log(sql1, dados);
      connection.commit();      
    } 
    catch (err) {
      console.error(err);
    } 
    finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
}

