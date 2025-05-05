import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

interface DonationFormProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const DonationForm = ({ open = true, onOpenChange }: DonationFormProps) => {
  const [step, setStep] = useState<
    "amount" | "details" | "payment" | "success"
  >("amount");
  const [donationAmount, setDonationAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState<string>("");

  const handleNextStep = () => {
    if (step === "amount") setStep("details");
    else if (step === "details") setStep("payment");
    else if (step === "payment") setStep("success");
  };

  const handlePrevStep = () => {
    if (step === "details") setStep("amount");
    else if (step === "payment") setStep("details");
  };

  const handleDonationComplete = () => {
    if (onOpenChange) onOpenChange(false);
    // Reset form after closing
    setTimeout(() => {
      setStep("amount");
      setDonationAmount("50");
      setCustomAmount("");
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        {step === "success" ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <DialogTitle className="text-2xl font-bold mb-2">
              Thank You!
            </DialogTitle>
            <DialogDescription className="mb-6">
              Your generous donation will help bring joy to the children at Joie
              d'Enfance. We've sent a receipt to your email address.
            </DialogDescription>
            <Button onClick={handleDonationComplete}>Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-center">
                {step === "amount" && "Make a Donation"}
                {step === "details" && "Your Information"}
                {step === "payment" && "Payment Details"}
              </DialogTitle>
              <DialogDescription className="text-center">
                {step === "amount" &&
                  "Your support brings joy to children in need"}
                {step === "details" &&
                  "Please provide your contact information"}
                {step === "payment" && "Complete your donation securely"}
              </DialogDescription>
            </DialogHeader>

            {step === "amount" && (
              <div className="space-y-6">
                <RadioGroup
                  defaultValue="50"
                  value={donationAmount}
                  onValueChange={setDonationAmount}
                  className="grid grid-cols-2 gap-4"
                >
                  {["25", "50", "100", "250"].map((amount) => (
                    <div key={amount} className="flex items-center space-x-2">
                      <RadioGroupItem value={amount} id={`amount-${amount}`} />
                      <Label htmlFor={`amount-${amount}`} className="flex-1">
                        ${amount}
                      </Label>
                    </div>
                  ))}
                  <div className="col-span-2 flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="amount-custom" />
                    <Label htmlFor="amount-custom" className="flex-1">
                      Custom Amount
                    </Label>
                    {donationAmount === "custom" && (
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-24"
                      />
                    )}
                  </div>
                </RadioGroup>

                <div className="space-y-2">
                  <Label htmlFor="donation-frequency">Frequency</Label>
                  <Select defaultValue="one-time">
                    <SelectTrigger id="donation-frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="annually">Annually</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === "details" && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Share why you're supporting Joie d'Enfance..."
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billing-address">Billing Address</Label>
                  <Input id="billing-address" placeholder="Street Address" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2 col-span-1">
                    <Label htmlFor="zip">Zip/Postal Code</Label>
                    <Input id="zip" placeholder="12345" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select defaultValue="us">
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
              {step !== "amount" && (
                <Button variant="outline" onClick={handlePrevStep}>
                  Back
                </Button>
              )}
              <Button
                onClick={handleNextStep}
                className={step === "amount" ? "w-full" : ""}
              >
                {step === "payment" ? "Complete Donation" : "Continue"}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DonationForm;
