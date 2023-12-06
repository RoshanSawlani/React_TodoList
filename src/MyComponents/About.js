import React from 'react';

export const About = () => {
    const styles = {
        container: {
          padding: '20px',
          maxWidth: '800px',
          margin: '0 auto',
        },
        heading: {
          fontSize: '2em',
          color: '#333',
          marginBottom: '20px',
        },
        description: {
          fontSize: '1.2em',
          color: '#666',
          marginBottom: '30px',
        },
        featureSection: {
          marginBottom: '30px',
        },
        usageSection: {
          marginBottom: '30px',
        },
        contactSection: {
          marginBottom: '30px',
        },
        thankYouMessage: {
          fontSize: '1.2em',
          color: '#333',
        },
      };
      
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About MyTodosList App</h1>

      <p style={styles.description}>
        Welcome to MyTodosList, a simple and efficient to-do list application
        designed to help you stay organized and boost your productivity.
        Whether you're managing daily tasks, work projects, or personal goals,
        MyTodosList is here to streamline your to-do list experience.
      </p>

      <div style={styles.featureSection}>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Easy Task Management:</strong> Quickly add, edit, and delete
            tasks with a user-friendly interface.
          </li>
          <li>
            <strong>Prioritization:</strong> Prioritize tasks to focus on what
            matters most.
          </li>
          <li>
            <strong>Persistence:</strong> Your to-do list is saved locally,
            ensuring your tasks are always accessible even when you close the app.
          </li>
          <li>
            <strong>Responsive Design:</strong> Access your to-do list seamlessly
            on various devices, from desktop to mobile.
          </li>
        </ul>
      </div>

      <div style={styles.usageSection}>
        <h2>How to Use</h2>
        <ol>
          <li>
            <strong>Add a Todo:</strong>
            <ul>
              <li>Click on the "Add Todo" button.</li>
              <li>Enter the title and description of your task.</li>
              <li>Click "Add Todo" to save the task to your list.</li>
            </ul>
          </li>
          <li>
            <strong>Manage Todos:</strong>
            <ul>
              <li>
                View your list of todos with details such as title, description,
                and priority.
              </li>
              <li>Mark tasks as completed or delete them as needed.</li>
            </ul>
          </li>
          <li>
            <strong>Stay Organized:</strong>
            <ul>
              <li>Prioritize tasks based on their importance.</li>
              <li>Edit or remove tasks to keep your list up-to-date.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div style={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>
          Have questions, feedback, or suggestions? We'd love to hear from you!
          Reach out to our support team at{' '}
          <a href="mailto:roshansawlani@gmail.com">roshansawlani@gmail.com</a>.
        </p>
      </div>

      <p style={styles.thankYouMessage}>
        Thank you for choosing MyTodosList to simplify your task management.
        Happy organizing!
      </p>
    </div>
  );
};

