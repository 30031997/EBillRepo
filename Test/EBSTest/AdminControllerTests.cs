using ElectricityBillingSystem.Controllers;
using ElectricityBillingSystem.DTO;
using ElectricityBillingSystem.Entities;
using ElectricityBillingSystem.Repositories;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBSTest
{
    public class AdminControllerTests
    {
        private Mock<IAdminRepository> mockAdminRepo;
        private Mock<IBillRepository> mockBillRepo;
        private Mock<IPaymentRepository> mockPaymentRepo;

        public AdminControllerTests()
        {
            mockAdminRepo = new Mock<IAdminRepository>();
            mockBillRepo = new Mock<IBillRepository>();
            mockPaymentRepo = new Mock<IPaymentRepository>();
        }

        [Test]
        public void GetAllCustomersTest()
        {
            //Arrange
            var customers = new List<Customer>() {
                new Customer(){ CustomerId = 1, CustomerName = "Akash",Role = "CUSTOMER",CustomerQuestion = "Nickname",
                                CustomerAnswer = "ZZ",CustomerEmail = "aakash@ebs.com",Password = "admin@123",
                                CustomerContanctNo = "7978025340",CustomerAddress ="Mumbai",ElectricityBoardId =1
                },
                new Customer(){ CustomerId = 1, CustomerName = "Akash",Role = "CUSTOMER",CustomerQuestion = "Nickname",
                                CustomerAnswer = "ZZ",CustomerEmail = "aakash@ebs.com",Password = "admin@123",
                                CustomerContanctNo = "7978025340",CustomerAddress ="Mumbai",ElectricityBoardId =1
                }
            };
            var customerDTO = new List<CustomerDTO>() {
                new CustomerDTO(){ CustomerId = 1, CustomerName = "Akash",Role = "CUSTOMER",CustomerEmail = "aakash@ebs.com",
                                CustomerContanctNo = "7978025340",CustomerAddress ="Mumbai",ElectricityBoardId =1
                },
                new CustomerDTO(){ CustomerId = 1, CustomerName = "Akash",Role = "CUSTOMER",CustomerEmail = "aakash@ebs.com",
                                CustomerContanctNo = "7978025340",CustomerAddress ="Mumbai",ElectricityBoardId =1
                }
            };
            mockAdminRepo.Setup(x => x.GetAllCustomers()).Returns(customerDTO);
            var controller = new AdminController(mockAdminRepo.Object, mockBillRepo.Object, mockPaymentRepo.Object);

            //Act
            IActionResult result = controller.GetAllCustomers();
            var okResult = result as OkObjectResult;

            // Assert
            Assert.IsNotNull(okResult);
            Assert.AreEqual(200, okResult.StatusCode);
        }

    }
}
