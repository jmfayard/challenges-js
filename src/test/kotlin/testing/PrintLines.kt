package testing

/**
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 * - Every close bracket has a corresponding open bracket of the same type.
 */

fun <T> List<T>.printLines(name: String, transform: ((T) -> CharSequence)? = null) =
    println("""
        |== $name
        |${joinToString("\n", transform = transform)}
        |
        |""".trimMargin())