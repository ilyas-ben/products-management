package com.ilyas.productmanagement.service.product;

import com.ilyas.productmanagement.model.Product;
import com.ilyas.productmanagement.repo.ProductRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements  ProductService{

    private final ProductRepo productRepo;

    public ProductServiceImpl(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    @Override
    public List<Product> findAll() {
        return productRepo.findAll();
    }

    @Override
    public Product findById(int id) {
        return productRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product with id " + id + " not found"));    }

    @Override
    public Product save(Product newProduct) {
        return productRepo.save(newProduct);
    }

    @Override
    public void deleteById(int id) {
        productRepo.deleteById(id);
    }
}
