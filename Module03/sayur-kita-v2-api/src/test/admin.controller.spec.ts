import { Request, Response } from "express";
import { AdminController } from "../controllers/admin.controller";
import { AdminService } from "../services/admin.service";
import { EmailService } from "../services/email.service";

jest.mock("../services/admin.service");
jest.mock("../services/email.service");

describe("AdminController", () => {
  let adminController: AdminController;
  let adminService: jest.Mocked<AdminService>;
  let emailService: jest.Mocked<EmailService>;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let jsonMock = jest.fn();

  beforeEach(() => {
    adminService = new AdminService() as jest.Mocked<AdminService>;
    emailService = new EmailService() as jest.Mocked<EmailService>;
    adminController = new AdminController();

    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
      json: jsonMock,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // 1. skenario pengujian untuk fitur create product
  it("should create a product and send an email notification", async () => {
    // data untuk testing create product
    const productData: any = {
      product_id: 1,
      name: "Sample Product",
      category: "Sample",
      price: 100,
      discounted_price: 25,
      description: "create for testing create product description",
      image: "sample.jpg",
      stock: 10,
      created_at: Date.now(),
      updatedAt: Date.now(),
    };

    mockRequest.body = productData;

    // menguji seberapa valid output yang dihasilkan dengan data testing
    adminService.createProduct.mockResolvedValue(productData);
    emailService.sendEmail.mockResolvedValue(true);

    // untuk mengambil request dan response dari admin controller
    await adminController.createProduct(
      mockRequest as Request,
      mockResponse as Response
    );

    // hasil yang diharapkan
    expect(emailService.sendEmail).toHaveBeenCalledWith(
      "bagasdhityataufiqqi21@gmail.com",
      expect.any(Object)
    );
    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.send).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Product created successfully",
        status: 201,
      })
    );
  });
});
