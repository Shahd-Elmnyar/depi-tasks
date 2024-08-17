<?php

class Employee
{
    private int $id;
    private string $firstName;
    private string $lastName;
    private float $salary;

    public function __construct(int $id, string $firstName, string $lastName, float $salary)
    {
        $this->id = $id;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->salary = $salary;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function getLastName(): string
    {
        return $this->lastName;
    }

    public function getSalary(): float
    {
        return $this->salary;
    }

    public function setSalary(float $salary): void
    {
        $this->salary = $salary;
    }

    public function getName(): string
    {
        return $this->firstName . " " . $this->lastName;
    }

    public function getAnnualSalary(): float
    {
        return $this->salary * 12;
    }

    public function raiseSalary(float $percent): float
    {
        $this->salary += $this->salary * ($percent / 100);
        return $this->salary;
    }

    public function __toString(): string
    {
        return "Employee[id=" . $this->id . ",name=" . $this->getName() . ",salary=" . $this->salary . "]";
    }
}

// Test Driver
$e1 = new Employee(8, "Peter", "Tan", 2500);
echo $e1 . "\n";

$e1->setSalary(999);
echo $e1 . "\n";

echo "id is: " . $e1->getId() . "\n";
echo "firstname is: " . $e1->getFirstName() . "\n";
echo "lastname is: " . $e1->getLastName() . "\n";
echo "salary is: " . $e1->getSalary() . "\n";
echo "name is: " . $e1->getName() . "\n";
echo "annual salary is: " . $e1->getAnnualSalary() . "\n";

echo $e1->raiseSalary(10) . "\n";
echo $e1 . "\n";
