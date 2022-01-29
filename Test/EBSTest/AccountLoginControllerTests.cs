using ElectricityBillingSystem.Controllers;
using ElectricityBillingSystem.DTO;
using ElectricityBillingSystem.Entities;
using ElectricityBillingSystem.Models;
using ElectricityBillingSystem.Repositories;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using System.Net;

namespace EBSTest
{
    public class AccountLoginControllerTests
    {
        private Mock<IAdminRepository> mockAdminRepo;
        private Mock<ICustomerRepository> mockCustomerRepo;

        public AccountLoginControllerTests()
        {
            mockAdminRepo = new Mock<IAdminRepository>();
            mockCustomerRepo= new Mock<ICustomerRepository>();
        }

        //[Test]
        //public void LoginTest()
        //{
        //    //Arrange
        //    var admin = new Admin() { 
        //        AdminId = 1, 
        //        AdminName = "Akash", 
        //        Role="ADMIN", 
        //        AdminQuestion="Nickname",
        //        AdminAnswer="ZZ",
        //        AdminEmail="aakash@ebs.com",
        //        Password="admin@123",
        //        AdminContanctNo="7978025340"
        //    };
        //    var customer = new Customer()
        //    {
        //        CustomerId = 1,CustomerName = "Akash",Role = "CUSTOMER",CustomerQuestion = "Nickname",
        //        CustomerAnswer = "ZZ",CustomerEmail = "aakash@ebs.com",Password = "admin@123",
        //        CustomerContanctNo = "7978025340",CustomerAddress = "Mumbai",ElectricityBoardId = 1
        //    };
        //    LoginModel model = new LoginModel { role="ADMIN",email = "aakash@ebs.com", password = "admin@123" };
        //    mockAdminRepo.Setup(x => x.ValidateAdmin(model)).Returns(admin);
        //    var controller = new AccountLogInController(mockCustomerRepo.Object, mockAdminRepo.Object);

        //    //Act
        //    IActionResult result = controller.Login(model);
        //    var okResult = result as OkObjectResult;

        //    // Assert
        //    Assert.IsNotNull(okResult);
        //    Assert.AreEqual(200, okResult.StatusCode);
        //}

        //[Test]
        //public void ForgetPasswordTest()
        //{
        //    //Arrange
        //    var admin = new Admin()
        //    {
        //        AdminId = 1,
        //        AdminName = "Akash",
        //        Role = "ADMIN",
        //        AdminQuestion = "Nickname",
        //        AdminAnswer = "ZZ",
        //        AdminEmail = "aakash@ebs.com",
        //        Password = "admin@123",
        //        AdminContanctNo = "7978025340"
        //    };
        //    var customer = new Customer()
        //    {
        //        CustomerId = 1,
        //        CustomerName = "Akash",
        //        Role = "CUSTOMER",
        //        CustomerQuestion = "Nickname",
        //        CustomerAnswer = "ZZ",
        //        CustomerEmail = "aakash@ebs.com",
        //        Password = "admin@123",
        //        CustomerContanctNo = "7978025340",
        //        CustomerAddress = "Mumbai",
        //        ElectricityBoardId = 1
        //    };

        //    var feedback = new Feedback (){ Result=true, Message="Password has been reset!" };
        //    ForgetPasswordDTO model = new ForgetPasswordDTO {  Answer = "GG", NewPassword = "admin@123" };
        //    mockAdminRepo.Setup(x => x.ForgetPassword("aakash@ebs.com", model)).Returns(feedback);
        //    //mockCustomerRepo.Setup(x => x.ForgetPassword("SUNI@ebs.com", model)).Returns(feedback);
        //    var controller = new AccountLogInController(mockCustomerRepo.Object, mockAdminRepo.Object);

        //    //Act
        //    IActionResult result = controller.ForgetPassword(Role.ADMIN,"aakash@ebs.com", model);
        //    var okResult = result as OkObjectResult;

        //    // Assert
        //    Assert.IsNotNull(okResult);
        //    Assert.AreEqual(200, okResult.StatusCode);
        //}

        //[Test]
        //public void CustomerRegistrationTest()
        //{
        //    //Arrange
        //    var customer = new Customer()
        //    {
        //        CustomerId = 1,
        //        CustomerName = "Akash",
        //        Role = "CUSTOMER",
        //        CustomerQuestion = "Nickname",
        //        CustomerAnswer = "ZZ",
        //        CustomerEmail = "aakash@ebs.com",
        //        Password = "admin@123",
        //        CustomerContanctNo = "7978025340",
        //        CustomerAddress = "Mumbai",
        //        ElectricityBoardId = 1
        //    };
        //    var feedback = new Feedback() { Result = true, Message = "Account Created!" };
        //    mockCustomerRepo.Setup(x => x.Register(customer,CustomerType.HOUSEHOLD)).Returns(feedback);
        //    var controller = new AccountLogInController(mockCustomerRepo.Object, mockAdminRepo.Object);

        //    //Act
        //    IActionResult result = controller.CustomerRegistration(customer, CustomerType.HOUSEHOLD);
        //    var okResult = result as OkObjectResult;

        //    // Assert
        //    Assert.IsNotNull(okResult);
        //    Assert.AreEqual(200, okResult.StatusCode);
        //}
    }
}