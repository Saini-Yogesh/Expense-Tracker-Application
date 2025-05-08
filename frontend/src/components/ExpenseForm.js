import React, { useEffect, useState } from 'react';
import "../Css/ExpenseForm.css"

const ExpenseForm = ({ onAdd, editing }) => {
    const today = new Date().toISOString().split('T')[0];

    const [form, setForm] = useState({
        name: '',
        amount: '',
        category: '',
        date: today
    });

    useEffect(() => {
        if (editing) {
            setForm({
                name: editing.name,
                amount: editing.amount,
                category: editing.category,
                date: editing.date.slice(0, 10)
            });
        } else {
            setForm({ name: '', amount: '', category: '', date: today });
        }
    }, [editing, today]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.amount || !form.category || !form.date) return;
        onAdd(form);
        setForm({ name: '', amount: '', category: '', date: today });
    };

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <input type="text" id="name" value={form.name} onChange={handleChange} placeholder="Expense Name" required />
            <input type="number" id="amount" value={form.amount} onChange={handleChange} placeholder="Amount" required />
            <select id="category" value={form.category} onChange={handleChange} required>
                <option value="" disabled>Select Category</option>
                <option value="Food">Food</option>
                <option value="Groceries">Groceries</option>
                <option value="Transport">Transport</option>
                <option value="Rent">Rent</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Shopping">Shopping</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
            </select>
            <input type="date" id="date" value={form.date} onChange={handleChange} />
            <button type="submit">{editing ? 'Update' : 'Add'} Expense</button>
        </form>
    );
};

export default ExpenseForm;
