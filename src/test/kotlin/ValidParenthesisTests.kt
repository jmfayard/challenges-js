import kotlin.test.Test
import kotlin.test.assertEquals

/**
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 */
class ValidParenthesisTests {
    @Test
    fun utils() {
        val test = mutableListOf("a", "b", "c")
        assertEquals("c", test.lastOrNull())
        assertEquals(true, Stack.isOpen('('))
        assertEquals(true, Stack.isOpen('['))
        assertEquals(true, Stack.isOpen('{'))
        assertEquals(false, Stack.isOpen(')'))
        assertEquals(false, Stack.isOpen(']'))
        assertEquals(false, Stack.isOpen('}'))
    }
    @Test
    fun valid() {
        val valid = listOf("", "{{}}", "(())", "[[]]", "([{}])")
        val invalid = listOf("())", ")(", "(]", "(")
        println("== Valid")
        valid.forEach { isValid(it) }
        println("== Invalid")
        invalid.forEach { isValid(it) }
    }
}



