<?php

class Circle
{
    private float $radius;

    public function __construct(float $radius = 1.0)
    {
        $this->radius = $radius;
    }

    public function getRadius(): float
    {
        return $this->radius;
    }

    public function setRadius(float $radius): void
    {
        $this->radius = $radius;
    }

    public function getArea(): float
    {
        return pi() * pow($this->radius, 2);
    }

    public function getCircumference(): float
    {
        return 2 * pi() * $this->radius;
    }

    public function __toString(): string
    {
        return "Circle[radius=" . $this->radius . "]";
    }
}

// Test Driver
$c1 = new Circle(1.1);
echo $c1 . "\n";

$c2 = new Circle();
echo $c2 . "\n";

$c1->setRadius(2.2);
echo $c1 . "\n";
echo "radius is: " . $c1->getRadius() . "\n";
printf("area is: %.2f\n", $c1->getArea());
printf("circumference is: %.2f\n", $c1->getCircumference());

