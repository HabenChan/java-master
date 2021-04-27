package org.javamaster.b2c.test.validation;


import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * @author yudong
 * @date 2019/6/17
 */
public class CheckCaseValidator implements ConstraintValidator<CheckCase, String> {
    private CheckCase.CaseMode caseMode;

    @Override
    public void initialize(CheckCase constraintAnnotation) {
        this.caseMode = constraintAnnotation.value();
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {

        if (value == null) {
            return true;
        }
        if (caseMode == CheckCase.CaseMode.UPPER) {
            return value.equals(value.toUpperCase());
        } else {
            return value.equals(value.toLowerCase());
        }
    }

}
