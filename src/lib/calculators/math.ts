export function calculateSIPReturns(
  monthlyInvestment: number,
  annualReturnRate: number,
  years: number
): {
  totalInvested: number;
  estimatedReturns: number;
  totalValue: number;
  yearlyBreakdown: Array<{
    year: number;
    invested: number;
    returns: number;
    totalValue: number;
  }>;
} {
  const monthlyRate = annualReturnRate / 12 / 100;
  const totalMonths = years * 12;

  let totalValue = 0;
  const yearlyBreakdown = [];

  for (let month = 1; month <= totalMonths; month++) {
    totalValue = (totalValue + monthlyInvestment) * (1 + monthlyRate);

    if (month % 12 === 0) {
      const year = month / 12;
      const invested = monthlyInvestment * month;
      const returns = totalValue - invested;
      yearlyBreakdown.push({
        year,
        invested,
        returns,
        totalValue,
      });
    }
  }

  const totalInvested = monthlyInvestment * totalMonths;
  const estimatedReturns = totalValue - totalInvested;

  return {
    totalInvested,
    estimatedReturns,
    totalValue,
    yearlyBreakdown,
  };
}

export function calculateLumpsumReturns(
  principal: number,
  annualReturnRate: number,
  years: number
): {
  totalValue: number;
  estimatedReturns: number;
  yearlyBreakdown: Array<{
    year: number;
    value: number;
    returns: number;
  }>;
} {
  const yearlyBreakdown = [];

  for (let year = 1; year <= years; year++) {
    const value = principal * Math.pow(1 + annualReturnRate / 100, year);
    yearlyBreakdown.push({
      year,
      value,
      returns: value - principal,
    });
  }

  const totalValue = principal * Math.pow(1 + annualReturnRate / 100, years);
  const estimatedReturns = totalValue - principal;

  return {
    totalValue,
    estimatedReturns,
    yearlyBreakdown,
  };
}

export function calculateStepUpSIPReturns(
  monthlyInvestment: number,
  annualReturnRate: number,
  years: number,
  stepUpPercentage: number
): {
  totalInvested: number;
  estimatedReturns: number;
  totalValue: number;
  yearlyBreakdown: Array<{
    year: number;
    invested: number;
    returns: number;
    totalValue: number;
    monthlyInvestment: number;
  }>;
} {
  const monthlyRate = annualReturnRate / 12 / 100;
  const totalMonths = years * 12;

  let totalValue = 0;
  let currentMonthlyInvestment = monthlyInvestment;
  const yearlyBreakdown = [];

  for (let month = 1; month <= totalMonths; month++) {
    if (month > 1 && (month - 1) % 12 === 0) {
      currentMonthlyInvestment = currentMonthlyInvestment * (1 + stepUpPercentage / 100);
    }

    totalValue = (totalValue + currentMonthlyInvestment) * (1 + monthlyRate);

    if (month % 12 === 0) {
      const year = month / 12;
      const invested = monthlyInvestment * 12 * year;
      let actualInvested = 0;
      let tempInvestment = monthlyInvestment;
      for (let y = 1; y <= year; y++) {
        actualInvested += tempInvestment * 12;
        tempInvestment = tempInvestment * (1 + stepUpPercentage / 100);
      }
      const returns = totalValue - actualInvested;
      yearlyBreakdown.push({
        year,
        invested: actualInvested,
        returns,
        totalValue,
        monthlyInvestment: currentMonthlyInvestment,
      });
    }
  }

  let totalInvested = 0;
  let tempInvestment = monthlyInvestment;
  for (let year = 1; year <= years; year++) {
    totalInvested += tempInvestment * 12;
    tempInvestment = tempInvestment * (1 + stepUpPercentage / 100);
  }

  const estimatedReturns = totalValue - totalInvested;

  return {
    totalInvested,
    estimatedReturns,
    totalValue,
    yearlyBreakdown,
  };
}

export function calculateSWPReturns(
  initialInvestment: number,
  annualReturnRate: number,
  monthlyWithdrawal: number,
  years: number
): {
  finalValue: number;
  totalWithdrawn: number;
  totalReturns: number;
  yearlyBreakdown: Array<{
    year: number;
    openingValue: number;
    withdrawn: number;
    returns: number;
    closingValue: number;
  }>;
  depleted: boolean;
  depletedAtMonth?: number;
} {
  const monthlyRate = annualReturnRate / 12 / 100;
  const totalMonths = years * 12;

  let currentValue = initialInvestment;
  let totalWithdrawn = 0;
  const yearlyBreakdown = [];
  let depleted = false;
  let depletedAtMonth: number | undefined;

  for (let month = 1; month <= totalMonths; month++) {
    const openingValue = currentValue;
    currentValue = currentValue * (1 + monthlyRate);

    if (currentValue >= monthlyWithdrawal) {
      currentValue -= monthlyWithdrawal;
      totalWithdrawn += monthlyWithdrawal;
    } else {
      totalWithdrawn += currentValue;
      currentValue = 0;
      if (!depleted) {
        depleted = true;
        depletedAtMonth = month;
      }
    }

    if (month % 12 === 0) {
      const year = month / 12;
      const withdrawn = Math.min(monthlyWithdrawal * 12, openingValue * 12);
      const returns = currentValue - (openingValue - withdrawn);
      yearlyBreakdown.push({
        year,
        openingValue,
        withdrawn,
        returns,
        closingValue: currentValue,
      });
    }

    if (currentValue <= 0) {
      break;
    }
  }

  const totalReturns = currentValue + totalWithdrawn - initialInvestment;

  return {
    finalValue: currentValue,
    totalWithdrawn,
    totalReturns,
    yearlyBreakdown,
    depleted,
    depletedAtMonth,
  };
}

export function calculateSTPReturns(
  sourceAmount: number,
  sourceReturnRate: number,
  targetReturnRate: number,
  monthlyTransfer: number,
  years: number
): {
  sourceFinalValue: number;
  targetFinalValue: number;
  totalTransferred: number;
  combinedValue: number;
  yearlyBreakdown: Array<{
    year: number;
    sourceValue: number;
    targetValue: number;
    totalValue: number;
  }>;
} {
  const sourceMonthlyRate = sourceReturnRate / 12 / 100;
  const targetMonthlyRate = targetReturnRate / 12 / 100;
  const totalMonths = years * 12;

  let sourceValue = sourceAmount;
  let targetValue = 0;
  let totalTransferred = 0;
  const yearlyBreakdown = [];

  for (let month = 1; month <= totalMonths; month++) {
    sourceValue = sourceValue * (1 + sourceMonthlyRate);
    targetValue = targetValue * (1 + targetMonthlyRate);

    const transfer = Math.min(monthlyTransfer, sourceValue);
    sourceValue -= transfer;
    targetValue += transfer;
    totalTransferred += transfer;

    if (month % 12 === 0) {
      const year = month / 12;
      yearlyBreakdown.push({
        year,
        sourceValue,
        targetValue,
        totalValue: sourceValue + targetValue,
      });
    }

    if (sourceValue <= 0 && targetValue > 0) {
      break;
    }
  }

  return {
    sourceFinalValue: sourceValue,
    targetFinalValue: targetValue,
    totalTransferred,
    combinedValue: sourceValue + targetValue,
    yearlyBreakdown,
  };
}

export function calculateXIRR(cashflows: Array<{ date: Date; amount: number }>): number | null {
  if (cashflows.length < 2) return null;

  const sorted = [...cashflows].sort((a, b) => a.date.getTime() - b.date.getTime());
  const firstDate = sorted[0]!.date;

  const normalized = sorted.map((cf) => ({
    days: (cf.date.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24),
    amount: cf.amount,
  }));

  let guess = 0.1;
  const maxIterations = 100;
  const tolerance = 1e-6;
  let npv = 0;
  let dnpv = 0;

  for (let i = 0; i < maxIterations; i++) {
    npv = 0;
    dnpv = 0;

    for (const cf of normalized) {
      const factor = Math.pow(1 + guess, cf.days / 365);
      npv += cf.amount / factor;
      dnpv -= ((cf.days / 365) * cf.amount) / (factor * (1 + guess));
    }

    if (Math.abs(npv) < tolerance) {
      return guess * 100;
    }

    if (dnpv === 0) break;
    guess = guess - npv / dnpv;

    if (guess < -0.99 || guess > 10) {
      return null;
    }
  }

  return Math.abs(npv) < tolerance ? guess * 100 : null;
}

export function calculateRetirementNeeds(
  currentAge: number,
  retirementAge: number,
  lifeExpectancy: number,
  currentMonthlyExpenses: number,
  inflationRate: number,
  preRetirementReturn: number,
  postRetirementReturn: number,
  existingSavings: number,
  monthlyInvestment: number
): {
  requiredCorpus: number;
  projectedSavings: number;
  shortfall: number;
  monthlyWithdrawal: number;
  yearlyBreakdown: Array<{
    age: number;
    savings: number;
    withdrawal?: number;
    corpus?: number;
  }>;
} {
  const yearsToRetirement = retirementAge - currentAge;
  const yearsInRetirement = lifeExpectancy - retirementAge;

  const monthlyInflationRate = inflationRate / 12 / 100;
  const monthlyPreReturn = preRetirementReturn / 12 / 100;
  const monthlyPostReturn = postRetirementReturn / 12 / 100;

  let savings = existingSavings;
  const yearlyBreakdown: Array<{
    age: number;
    savings: number;
    withdrawal?: number;
    corpus?: number;
  }> = [];

  for (let year = 1; year <= yearsToRetirement; year++) {
    for (let month = 1; month <= 12; month++) {
      savings = (savings + monthlyInvestment) * (1 + monthlyPreReturn);
    }
    yearlyBreakdown.push({
      age: currentAge + year,
      savings,
    });
  }

  const monthlyExpenseAtRetirement =
    currentMonthlyExpenses * Math.pow(1 + inflationRate / 100, yearsToRetirement);

  const monthlyWithdrawal = monthlyExpenseAtRetirement;

  let corpus = savings;
  for (let year = 1; year <= yearsInRetirement; year++) {
    const annualWithdrawal = monthlyWithdrawal * 12;
    corpus = corpus * (1 + postRetirementReturn / 100) - annualWithdrawal;
    yearlyBreakdown.push({
      age: retirementAge + year,
      savings: corpus,
      withdrawal: annualWithdrawal,
      corpus,
    });
    if (corpus <= 0) break;
  }

  let requiredCorpus = 0;
  const pvFactor =
    (1 - Math.pow(1 + postRetirementReturn / 100, -yearsInRetirement)) /
    (postRetirementReturn / 100);
  requiredCorpus = monthlyExpenseAtRetirement * 12 * pvFactor;

  const projectedSavings = savings;
  const shortfall = Math.max(0, requiredCorpus - projectedSavings);

  return {
    requiredCorpus,
    projectedSavings,
    shortfall,
    monthlyWithdrawal,
    yearlyBreakdown,
  };
}

export function calculateGoalPlanner(
  goalAmount: number,
  years: number,
  annualReturnRate: number,
  currentSavings: number,
  monthlyInvestment: number
): {
  projectedValue: number;
  shortfall: number;
  requiredMonthlyInvestment: number;
  yearlyBreakdown: Array<{
    year: number;
    value: number;
    invested: number;
    returns: number;
  }>;
} {
  const monthlyRate = annualReturnRate / 12 / 100;
  const totalMonths = years * 12;

  let value = currentSavings;
  const yearlyBreakdown = [];

  for (let month = 1; month <= totalMonths; month++) {
    value = (value + monthlyInvestment) * (1 + monthlyRate);

    if (month % 12 === 0) {
      const year = month / 12;
      const invested = currentSavings + monthlyInvestment * month;
      const returns = value - invested;
      yearlyBreakdown.push({
        year,
        value,
        invested,
        returns,
      });
    }
  }

  const projectedValue = value;
  const shortfall = Math.max(0, goalAmount - projectedValue);

  let requiredMonthlyInvestment = 0;
  if (monthlyRate > 0) {
    requiredMonthlyInvestment =
      (goalAmount - currentSavings * Math.pow(1 + monthlyRate, totalMonths)) /
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
  }

  return {
    projectedValue,
    shortfall,
    requiredMonthlyInvestment: Math.max(0, requiredMonthlyInvestment),
    yearlyBreakdown,
  };
}

export function calculateInflationImpact(
  currentValue: number,
  years: number,
  inflationRate: number
): {
  futureValue: number;
  purchasingPower: number;
  yearlyBreakdown: Array<{
    year: number;
    nominalValue: number;
    realValue: number;
  }>;
} {
  const yearlyBreakdown = [];

  for (let year = 1; year <= years; year++) {
    const nominalValue = currentValue * Math.pow(1 + inflationRate / 100, year);
    const realValue = currentValue;
    yearlyBreakdown.push({
      year,
      nominalValue,
      realValue,
    });
  }

  const futureValue = currentValue * Math.pow(1 + inflationRate / 100, years);
  const purchasingPower = (currentValue / Math.pow(1 + inflationRate / 100, years)) * 100;

  return {
    futureValue,
    purchasingPower,
    yearlyBreakdown,
  };
}

export function calculateMFvsFD(
  investmentAmount: number,
  years: number,
  mfReturnRate: number,
  fdReturnRate: number,
  mfExpenseRatio: number,
  taxBracket: number
): {
  mfFinalValue: number;
  fdFinalValue: number;
  mfPostTaxValue: number;
  fdPostTaxValue: number;
  difference: number;
  yearlyBreakdown: Array<{
    year: number;
    mfValue: number;
    fdValue: number;
    mfPostTax: number;
    fdPostTax: number;
  }>;
} {
  const mfNetReturn = mfReturnRate - mfExpenseRatio;
  const fdPostTaxReturn = fdReturnRate * (1 - taxBracket / 100);

  const yearlyBreakdown = [];

  for (let year = 1; year <= years; year++) {
    const mfValue = investmentAmount * Math.pow(1 + mfNetReturn / 100, year);
    const fdValue = investmentAmount * Math.pow(1 + fdReturnRate / 100, year);
    const mfPostTax = mfValue;
    const fdPostTax = investmentAmount + (fdValue - investmentAmount) * (1 - taxBracket / 100);

    yearlyBreakdown.push({
      year,
      mfValue,
      fdValue,
      mfPostTax,
      fdPostTax,
    });
  }

  const mfFinalValue = investmentAmount * Math.pow(1 + mfNetReturn / 100, years);
  const fdFinalValue = investmentAmount * Math.pow(1 + fdReturnRate / 100, years);
  const mfPostTaxValue = mfFinalValue;
  const fdPostTaxValue =
    investmentAmount + (fdFinalValue - investmentAmount) * (1 - taxBracket / 100);
  const difference = mfPostTaxValue - fdPostTaxValue;

  return {
    mfFinalValue,
    fdFinalValue,
    mfPostTaxValue,
    fdPostTaxValue,
    difference,
    yearlyBreakdown,
  };
}
