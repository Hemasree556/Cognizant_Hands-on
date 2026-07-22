### Difference between JPA, Hibernate and Spring Data JPA



#### **1. Java Persistence API (JPA)**



Java Persistence API (JPA) is a Java specification that defines how Java objects are mapped to relational database tables.



\- It is only a specification.



\- It does not contain any implementation.



\- It defines standard annotations such as:



&#x20; - @Entity



&#x20; - @Table



&#x20; - @Id



&#x20; - @Column



\- It provides portability between different ORM frameworks.



##### Advantages



\- Standard API.



\- Database independent.



\- Easy to switch ORM providers.



#### **2. Hibernate**



Hibernate is an Object Relational Mapping (ORM) framework.



It is one of the most popular implementations of the JPA specification.



Hibernate converts Java objects into SQL queries automatically.



\- Implements JPA.



\- Generates SQL automatically.



\- Handles CRUD operations.



\- Supports caching.



\- Manages object relationships.

##### 

##### Advantages



\- Less SQL coding.



\- Automatic table mapping.



\- Powerful ORM features.



##### Example



public Integer addEmployee(Employee employee){



&#x20;   Session session = factory.openSession();



&#x20;   Transaction tx = null;



&#x20;   Integer employeeID = null;



&#x20;   try {



&#x20;       tx = session.beginTransaction();



&#x20;       employeeID = (Integer) session.save(employee);



&#x20;       tx.commit();



&#x20;   } catch (HibernateException e) {



&#x20;       if (tx != null) tx.rollback();



&#x20;       e.printStackTrace();



&#x20;   } finally {



&#x20;       session.close();



&#x20;   }



&#x20;   return employeeID;



}

##### 

##### Explanation



Hibernate requires manual session management, transaction handling, commit, rollback and session closing. This results in more boilerplate code.



#### **3. Spring Data JPA**



Spring Data JPA is a Spring Framework module built on top of JPA.



It does not replace Hibernate.



Instead, it reduces boilerplate code by using repositories.



\- Uses JpaRepository.



\- Provides ready-made CRUD methods.



\- Automatically manages transactions.



\- Integrates seamlessly with Spring Boot.



##### Advantages



\- Very little code.



\- Faster development.



\- Easier maintenance.



\- Cleaner architecture.



##### Example



public interface EmployeeRepository extends JpaRepository<Employee, Integer> {



}



@Service



public class EmployeeService {



&#x20; @Autowired



&#x20;   private EmployeeRepository employeeRepository;



&#x20;   @Transactional



&#x20;   public void addEmployee(Employee employee) {



&#x20;       employeeRepository.save(employee);



&#x20;   }



}



##### **Explanation**



Spring Data JPA uses JpaRepository and @Transactional to automatically manage sessions and transactions. The developer only needs to call repository.save(employee).



##### Implementation in This Project



@Entity



@Table(name="country")



public class Country {



&#x20;   @Id



&#x20;   @Column(name="code")



&#x20;   private String code;



&#x20;   @Column(name="name")



&#x20;   private String name;



}



@Repository



public interface CountryRepository extends JpaRepository<Country,String>{



}



@Transactional



public List<Country> getAllCountries(){



&#x20;   return countryRepository.findAll();



}



This project uses Spring Data JPA with JpaRepository and @Transactional to access MySQL without manual session management.





##### **Comparison**



| Feature | JPA | Hibernate | Spring Data JPA |



|----------|-----|-----------|-----------------|



| Type | Specification | ORM Framework | Spring Module |



| Implementation | No | Yes | Uses Hibernate |



| SQL Generation | No | Yes | Yes |



| CRUD Operations | Defines Standard | Manual Coding | JpaRepository |



| Transaction Management | No | Manual | Automatic |



| Boilerplate Code | High | Medium | Very Low |





##### **Relationship**



Application



&#x20;       ↓



Spring Data JPA



&#x20;       ↓



Hibernate



&#x20;       ↓



JPA Specification



&#x20;       ↓



MySQL Database





##### **Conclusion**



JPA defines the rules for object persistence.



Hibernate implements those rules and performs the database operations.



Spring Data JPA simplifies Hibernate by reducing boilerplate code and providing repository interfaces for database operations.



