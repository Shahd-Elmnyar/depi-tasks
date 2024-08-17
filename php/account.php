<?php

class Account
{
    private string $id;
    private string $name;
    private float $balance;

    public function __construct(string $id, string $name, float $balance = 0)
    {
        $this->id = $id;
        $this->name = $name;
        $this->balance = $balance;
    }

    public function getID(): string
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getBalance(): float
    {
        return $this->balance;
    }

    public function credit(float $amount): void
    {
        $this->balance += $amount;
    }

    public function debit(float $amount): void
    {
        if ($amount > $this->balance) {
            echo "Amount exceeded balance\n";
        } else {
            $this->balance -= $amount;
        }
    }

    public function transferTo(Account $anotherAccount, float $amount): void
    {
        if ($amount <= $this->balance) {
            $this->debit($amount);
            $anotherAccount->credit($amount);
        } else {
            echo "Amount exceeded balance\n";
        }
    }

    public function __toString(): string
    {
        return "Account[id=" . $this->id . ",name=" . $this->name . ",balance=" . $this->balance . "]";
    }
}


$a1 = new Account("A101", "Tan Ah Teck", 88);
echo $a1 . "\n";

$a2 = new Account("A102", "Kumar");
echo $a2 . "\n";

echo "ID: " . $a1->getID() . "\n";
echo "Name: " . $a1->getName() . "\n";
echo "Balance: " . $a1->getBalance() . "\n";

$a1->credit(100);
echo $a1 . "\n";

$a1->debit(50);
echo $a1 . "\n";

$a1->debit(500);  // debit() error
echo $a1 . "\n";

$a1->transferTo($a2, 100);
echo $a1 . "\n";
echo $a2 . "\n";
