<?php
interface ShapeInterface
{
    public function getArea(): float;
    public function getPerimeter(): float;
}
abstract class Shape implements ShapeInterface
{
    protected string $color;
    protected bool $filled;

    public function __construct(string $color = "green", bool $filled = true)
    {
        $this->color = $color;
        $this->filled = $filled;
    }

    public function getColor(): string
    {
        return $this->color;
    }

    public function setColor(string $color): void
    {
        $this->color = $color;
    }

    public function isFilled(): bool
    {
        return $this->filled;
    }

    public function setFilled(bool $filled): void
    {
        $this->filled = $filled;
    }

    public function __toString(): string
    {
        $fillStatus = $this->filled ? "filled" : "Not filled";
        return "Shape[color={$this->color}, filled={$fillStatus}]";
    }
}
class Circle extends Shape
{
    private float $radius;

    public function __construct(float $radius = 1.0, string $color = "green", bool $filled = true)
    {
        parent::__construct($color, $filled);
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
        return pi() * $this->radius * $this->radius;
    }

    public function getPerimeter(): float
    {
        return 2 * pi() * $this->radius;
    }

    public function __toString(): string
    {
        return "Circle[Shape[color={$this->color}, filled={$this->filled}], radius={$this->radius}]";
    }
}
class Rectangle extends Shape
{
    protected float $width;
    protected float $length;

    public function __construct(float $width = 1.0, float $length = 1.0, string $color = "green", bool $filled = true)
    {
        parent::__construct($color, $filled);
        $this->width = $width;
        $this->length = $length;
    }

    public function getWidth(): float
    {
        return $this->width;
    }

    public function setWidth(float $width): void
    {
        $this->width = $width;
    }

    public function getLength(): float
    {
        return $this->length;
    }

    public function setLength(float $length): void
    {
        $this->length = $length;
    }

    public function getArea(): float
    {
        return $this->width * $this->length;
    }

    public function getPerimeter(): float
    {
        return 2 * ($this->width + $this->length);
    }

    public function __toString(): string
    {
        return "Rectangle[Shape[color={$this->color}, filled={$this->filled}], width={$this->width}, length={$this->length}]";
    }
}
class Square extends Rectangle
{
    public function __construct(float $side = 1.0, string $color = "green", bool $filled = true)
    {
        parent::__construct($side, $side, $color, $filled);
    }

    public function getSide(): float
    {
        return $this->width;
    }

    public function setSide(float $side): void
    {
        $this->width = $side;
        $this->length = $side;
    }

    public function setWidth(float $side): void
    {
        $this->setSide($side);
    }

    public function setLength(float $side): void
    {
        $this->setSide($side);
    }

    public function __toString(): string
    {
        return "Square[Rectangle[Shape[color={$this->color}, filled={$this->filled}], width={$this->width}, length={$this->length}]]";
    }
}
function testShapes()
{
    $shape1 = new Circle(5.5, "red", false);
    echo $shape1 . PHP_EOL;
    echo $shape1->getArea() . PHP_EOL;
    echo $shape1->getPerimeter() . PHP_EOL;
    echo $shape1->getColor() . PHP_EOL;
    echo $shape1->isFilled() . PHP_EOL;

    $circle1 = $shape1;
    echo $circle1 . PHP_EOL;
    echo $circle1->getArea() . PHP_EOL;
    echo $circle1->getPerimeter() . PHP_EOL;
    echo $circle1->getColor() . PHP_EOL;
    echo $circle1->isFilled() . PHP_EOL;
    echo $circle1->getRadius() . PHP_EOL;

    $shape3 = new Rectangle(1.0, 2.0, "red", false);
    echo $shape3 . PHP_EOL;
    echo $shape3->getArea() . PHP_EOL;
    echo $shape3->getPerimeter() . PHP_EOL;
    echo $shape3->getColor() . PHP_EOL;

    $rectangle1 = $shape3;
    echo $rectangle1 . PHP_EOL;
    echo $rectangle1->getArea() . PHP_EOL;
    echo $rectangle1->getColor() . PHP_EOL;
    echo $rectangle1->getLength() . PHP_EOL;

    $shape4 = new Square(6.6);
    echo $shape4 . PHP_EOL;
    echo $shape4->getArea() . PHP_EOL;
    echo $shape4->getColor() . PHP_EOL;
    echo $shape4->getSide() . PHP_EOL;

    $rectangle2 = $shape4;
    echo $rectangle2 . PHP_EOL;
    echo $rectangle2->getArea() . PHP_EOL;
    echo $rectangle2->getColor() . PHP_EOL;
    echo $rectangle2->getSide() . PHP_EOL;
    echo $rectangle2->getLength() . PHP_EOL;

    $square1 = $rectangle2;
    echo $square1 . PHP_EOL;
    echo $square1->getArea() . PHP_EOL;
    echo $square1->getColor() . PHP_EOL;
    echo $square1->getSide() . PHP_EOL;
    echo $square1->getLength() . PHP_EOL;
}

testShapes();
