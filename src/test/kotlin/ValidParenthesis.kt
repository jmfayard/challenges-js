fun isValid(input: String): Boolean {
    val stack = Stack(input, mutableListOf())
    input.forEachIndexed { index, c ->
        when {
            Stack.isOpen(c) -> stack.addOpenParenthesis(c)
            c == stack.latest() -> stack.pop()
            else -> stack.invalidate(index)
        }
    }
    if (stack.latest() != null) stack.invalidate(input.length)
    return stack.isValid()
}

data class Stack(
    val input: String,
    val expected: MutableList<Char>,
) {
    companion object {
        val parenthesis = mapOf('(' to ')', '{' to '}', '[' to ']')
        fun isOpen(c: Char) = c in parenthesis.keys
    }

    fun latest(): Char? = expected.lastOrNull()
    fun format() = expected.joinToString()

    fun pop() {
        expected.removeAt(expected.lastIndex)
    }

    private var errorMessage: String? = null
    fun invalidate(index: Int) {
        if (errorMessage == null) {
            errorMessage =
                "❌ invalid character=${input[index]} at index=$index with latest=${latest()} for input=$input"
        }
    }

    fun isValid(): Boolean = when {
        errorMessage == null -> {
            println("✅ valid parenthesis for input=$input")
            true
        }
        else -> {
            println(errorMessage)
            false
        }
    }

    fun addOpenParenthesis(c: Char) {
        expected += parenthesis.getValue(c)
    }
}